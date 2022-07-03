import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export const Collection = () => {
  const params = useParams();
  const [items, setItems] = useState();
  const [collectionSlug, setCollectionSlug] = useState();
  const [collectionId, setCollectionId] = useState();
  const getCollection = () => {
    const options = { method: "GET" };
    fetch(
      `https://testnets-api.opensea.io/api/v1/assets?owner=${collectionId}&order_direction=desc&offset=0&limit=20&collection=nft-qrh3afhhak&include_orders=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("gdaga");
        console.log(response);
        console.log(
          `https://testnets-api.opensea.io/api/v1/assets?owner=${collectionId}&asset_contract_address=${process.env.REACT_APP_CONTRACT_ADDRESS}&order_direction=desc&offset=0&limit=20&include_orders=false`
        );
        setItems(response.assets);
      })
      .catch((err) => console.error(err));
  };
  /*const getCollections = () => {
    const options = { method: "GET" };
    if (collectionId) {
      fetch(
        `https://testnets-api.opensea.io/api/v1/collections?asset_owner=${collectionId}&offset=0&limit=300`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          const slug = response[0].slug;
          console.log("slug");
          console.log(slug);
          setTimeout(() => {
            getCollection(slug);
          }, 1000);
        })
        .catch((err) => console.error(err));
    }
  };*/
  useEffect(() => {
    setCollectionId(params.collectionId);
    if (collectionId) {
      getCollection();
    }
    //getCollection();
  }, [params]);

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left lg:space-x-6">
          <h2 className="flex-1 text-2xl font-bold text-gray-900">
            My Collection
          </h2>
          <Link to="/mint">
            <div className="inline-flex items-center justify-center px-6 py-3 gap-2 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500">
              <AiOutlinePlus className="text-lg" />
              New Mint
            </div>
          </Link>
        </div>

        <div className="mt-6">
          <div className="flex w-full gap-6 pt-4 pb-8 -mt-4 overflow-x-auto snap-x">
            {items &&
              items.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full overflow-hidden bg-white border border-gray-200 rounded-lg snap-start scroll-ml-6 shrink-0 lg:w-[286px] sm:w-1/2 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                >
                  <div className="p-4">
                    <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
                      {item.image_url ? (
                        <img
                          className="object-cover w-full h-full"
                          src={item.image_url}
                          alt=""
                        />
                      ) : (
                        <p>No Image</p>
                      )}
                    </div>

                    <p className="mt-4 text-base font-bold text-gray-900">
                      <Link to={`/collection/${collectionId}/${item.token_id}`}>
                        {item.name}
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </Link>
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      15/100 NFTs
                    </p>

                    <hr className="mt-4 border-gray-200" />
                    <div className="grid grid-cols-2 mt-4 gap-x-6">
                      <div>
                        <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                          Request
                        </p>
                        <p className="mt-1 text-sm font-bold text-gray-900">
                          21
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                          Base Price
                        </p>
                        <p className="mt-1 text-sm font-bold text-gray-900">
                          0 MATIC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-4 space-x-3 lg:hidden">
          <button
            type="button"
            className="p-1.5 -m-1.5 text-gray-300 transition-all duration-200 rounded-full hover:text-gray-600 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <button
            type="button"
            className="p-1.5 -m-1.5 text-gray-300 transition-all duration-200 rounded-full hover:text-gray-600 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
