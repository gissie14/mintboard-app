import { stepConnectorClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Web3Storage } from "web3.storage";
import Web3Mint from "utils/Web3Mint.json";

import { useParams, Link } from "react-router-dom";

export const Detail = () => {
  const params = useParams();
  const [collectionId, setCollectionId] = useState();
  const [tokenId, setTokenId] = useState();
  const [detail, setDetail] = useState();
  const [nftAddress, setNftAddress] = useState();
  const [sendAddress, setSendAddress] = useState();
  const getDetail = () => {
    const options = { method: "GET" };
    if (tokenId) {
      fetch(
        `https://testnets-api.opensea.io/api/v1/asset/${collectionId}/${tokenId}/`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log("response");
          console.log(response);
          setDetail(response);
        })
        .catch((err) => console.error(err));
    }
  };
  const sendHandler = async () => {
    const API_KEY = process.env.REACT_APP_IPFS_API_KEY;
    const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          Web3Mint.abi,
          signer
        );
        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.transferNFT(
          nftAddress,
          sendAddress,
          tokenId,
          {
            gasLimit: 300000,
          }
        );
        console.log("Sending...please wait.");
        await nftTxn.wait();
        console.log(
          `Sent, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCollectionId(params.collectionId);
    setNftAddress(params.collectionId);
    setTokenId(params.tokenId);
    getDetail();
  }, [params]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto border border-gray-200 rounded-md">
          <div className="p-6 sm:p-8">
            <div className="bg-white rounded-lg">
              <div className="p-4">
                {detail && (
                  <div className="flex items-center">
                    {detail.image_url ? (
                      <img
                        className="w-12 h-auto rounded-lg shrink-0"
                        src={detail.image_url}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-12 h-auto rounded-lg shrink-0"
                        src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint/3/image.png"
                        alt=""
                      />
                    )}
                    <div className="flex-1 ml-4">
                      <p className="text-lg font-bold text-gray-900">
                        {detail.name}
                      </p>
                      <p className="mt-1 text-base font-medium text-gray-500">
                        {detail.num_sales} Minted
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <hr className="mt-6 border-gray-200" />

            <div className="mt-6 space-y-6 text-center">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Send Address
                </label>
                <div className="relative mt-3">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img
                      className="w-auto h-5"
                      src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint/3/ethereum-logo.svg"
                      alt=""
                    />
                  </div>

                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Send Address"
                      value={sendAddress}
                      onChange={(event) => setSendAddress(event.target.value)}
                      class="block w-full py-2 pl-10 pr-4 text-base font-bold text-center text-gray-900 bg-white border border-gray-200 rounded-md"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700"
                onClick={sendHandler}
              >
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
