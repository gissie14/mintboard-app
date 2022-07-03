import React, { useState } from "react";
import { ethers } from "ethers";
import { Web3Storage } from "web3.storage";
import Web3Mint from "utils/Web3Mint.json";

import { AiOutlineUpload } from "react-icons/ai";

export const Mint = () => {
  const [image, setImage] = useState();
  const [test, setTest] = useState();
  const [name, setName] = useState("Sample Title");
  const [totalSupply, setTotalSupply] = useState();
  const API_KEY = process.env.REACT_APP_IPFS_API_KEY;
  const askContractToMintNft = async (ipfs) => {
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
        let nftTxn = await connectedContract.mintIpfsNFT(name, ipfs, {
          gasLimit: 300000,
        });
        console.log("Mining...please wait.");
        await nftTxn.wait();
        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const imageToNFT = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      setTest(e.target);
      //const new_image = URL.createObjectURL(image)
      //setImage(URL.createObjectURL(image));
    }

    //const new_image = e.target;
    //setImage(new_image);
    console.log("new_image");
    console.log(e.target.files[0]);
  };
  const miningHandler = async () => {
    const client = new Web3Storage({ token: API_KEY });
    const rootCid = await client.put(test.files, {
      name: "experiment",
      maxRetries: 3,
    });
    const res = await client.get(rootCid); // Web3Response
    const files = await res.files(); // Web3File[]
    for (const file of files) {
      console.log("file.cid:", file.cid);
      askContractToMintNft(file.cid);
    }
  };
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-sm mx-auto md:max-w-3xl">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-gray-900">New Mint</p>
            <label className="inline-flex items-center justify-center px-6 py-3 gap-2 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
              <AiOutlineUpload className="text-lg" />
              Upload Image
              <input
                className="hidden"
                type="file"
                id="nftImage"
                accept=".jpg , .jpeg , .png"
                onChange={imageToNFT}
              />
            </label>
          </div>
          <div></div>
          <div className="mt-6 overflow-hidden bg-white border border-gray-200 md:mt-8 rounded-xl">
            <div className="md:flex">
              <div className="md:max-w-xs">
                {image ? (
                  <img
                    className="object-cover w-full h-full"
                    src={URL.createObjectURL(image)}
                    //src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint/2/image.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="object-cover w-full h-full"
                    src="/noimage.jpg"
                    //src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint/2/image.png"
                    alt=""
                  />
                )}
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 sm:p-8">
                <div className="space-y-6 mb-8">
                  <div className="grid items-center grid-cols-2 gap-6">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      Title:
                    </label>

                    <div className="">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Input Title"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>
                  </div>
                  {/*<div className="grid items-center grid-cols-2 gap-6">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      Volume:
                    </label>

                    <div className="">
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="Set Mint Volume"
                        value={totalSupply}
                        onChange={(event) => setTotalSupply(event.target.value)}
                        class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                      />
                    </div>
                </div>*/}
                </div>

                <div className="mt-12 space-y-5 text-center md:mt-0">
                  <button
                    type="button"
                    onClick={miningHandler}
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                  >
                    Mint
                  </button>
                  <p className="text-sm font-medium text-gray-400">
                    Mint your image and create NFT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
