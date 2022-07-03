import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CollectionList = (currentAccount) => {
  const [collections, setCollections] = useState();
  const getCollection = () => {
    const options = { method: "GET" };
    fetch(
      `https://testnets-api.opensea.io/api/v1/collections?asset_owner=${currentAccount}&offset=0&limit=300`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("response");
        console.log(response);
        setCollections(response);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCollection();
  }, []);

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            Trending Collections
          </h2>
        </div>
        {}
        <div className="flex flex-col mt-12">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-400 sm:pl-6"
                      >
                        Collection
                      </th>
                    </tr>
                  </thead>

                  <tbody className="border border-gray-200 divide-y divide-gray-200">
                    {collections &&
                      collections.map((collection, index) => (
                        <tr key={index}>
                          <td className="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                            <div className="flex items-center">
                              {collection.image_url ? (
                                <img
                                  className="object-cover w-10 h-10 rounded-full shrink-0"
                                  src={collection.image_url}
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="object-cover w-10 h-10 rounded-full shrink-0"
                                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/4/drop-1.png"
                                  alt=""
                                />
                              )}

                              <div className="ml-4">
                                <p className="text-base font-bold text-gray-900">
                                  <Link
                                    to={`/collection/${collection.primary_asset_contracts[0].address}`}
                                  >
                                    {collection.name}
                                    <span
                                      className="absolute inset-0"
                                      aria-hidden="true"
                                    ></span>
                                  </Link>
                                </p>
                                <p className="text-sm font-medium text-gray-500 mt-0.5">
                                  {collection.stats.total_supply -
                                    collection.owned_asset_count}{" "}
                                  / {collection.stats.total_supply} Mint
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
