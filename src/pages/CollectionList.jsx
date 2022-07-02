import React, { useState } from 'react'

export const CollectionList = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold text-gray-900">
            Trending Collections
          </h2>
        </div>

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
                      <th
                        scope="col"
                        className="px-3 py-3.5 sm:px-6 text-right text-sm font-medium text-gray-400"
                      >
                        Volume
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 sm:px-6 text-right text-sm font-medium text-gray-400"
                      >
                        Floor Price
                      </th>
                    </tr>
                  </thead>

                  <tbody className="border border-gray-200 divide-y divide-gray-200">
                    <tr>
                      <td className="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                        <div className="flex items-center">
                          <img
                            className="object-cover w-10 h-10 rounded-full shrink-0"
                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/4/drop-1.png"
                            alt=""
                          />
                          <div className="ml-4">
                            <p className="text-base font-bold text-gray-900">
                              <a href="#" title="">
                                Spud
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500 mt-0.5">
                              4200 NFTs
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        28,942 SOL
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        31.93 SOL
                      </td>
                    </tr>

                    <tr>
                      <td className="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                        <div className="flex items-center">
                          <img
                            className="object-cover w-10 h-10 rounded-full shrink-0"
                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/4/drop-2.png"
                            alt=""
                          />
                          <div className="ml-4">
                            <p className="text-base font-bold text-gray-900">
                              <a href="#" title="">
                                MattyIce
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500 mt-0.5">
                              4200 NFTs
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        14,320 SOL
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        42.57 SOL
                      </td>
                    </tr>

                    <tr>
                      <td className="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                        <div className="flex items-center">
                          <img
                            className="object-cover w-10 h-10 rounded-full shrink-0"
                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/4/drop-3.png"
                            alt=""
                          />
                          <div className="ml-4">
                            <p className="text-base font-bold text-gray-900">
                              <a href="#" title="">
                                Handx
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500 mt-0.5">
                              4200 NFTs
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        10,491 SOL
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        19.44 SOL
                      </td>
                    </tr>

                    <tr>
                      <td className="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                        <div className="flex items-center">
                          <img
                            className="object-cover w-10 h-10 rounded-full shrink-0"
                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/4/drop-4.png"
                            alt=""
                          />
                          <div className="ml-4">
                            <p className="text-base font-bold text-gray-900">
                              <a href="#" title="">
                                Shogun
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500 mt-0.5">
                              4200 NFTs
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        8,380 SOL
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        54.39 SOL
                      </td>
                    </tr>

                    <tr>
                      <td className="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                        <div className="flex items-center">
                          <img
                            className="object-cover w-10 h-10 rounded-full shrink-0"
                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/4/drop-5.png"
                            alt=""
                          />
                          <div className="ml-4">
                            <p className="text-base font-bold text-gray-900">
                              <a href="#" title="">
                                Smokin
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500 mt-0.5">
                              4200 NFTs
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        6,595 SOL
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        12.53 SOL
                      </td>
                    </tr>

                    <tr>
                      <td className="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                        <div className="flex items-center">
                          <img
                            className="object-cover w-10 h-10 rounded-full shrink-0"
                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/4/drop-6.png"
                            alt=""
                          />
                          <div className="ml-4">
                            <p className="text-base font-bold text-gray-900">
                              <a href="#" title="">
                                The Grim Reaper
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500 mt-0.5">
                              4200 NFTs
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        6,133 SOL
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        34.48 SOL
                      </td>
                    </tr>

                    <tr>
                      <td className="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                        <div className="flex items-center">
                          <img
                            className="object-cover w-10 h-10 rounded-full shrink-0"
                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/4/drop-7.png"
                            alt=""
                          />
                          <div className="ml-4">
                            <p className="text-base font-bold text-gray-900">
                              <a href="#" title="">
                                TheHawk
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500 mt-0.5">
                              4200 NFTs
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        4,204 SOL
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        12.84 SOL
                      </td>
                    </tr>

                    <tr>
                      <td className="relative py-4 pl-4 pr-3 bg-white sm:pl-6">
                        <div className="flex items-center">
                          <img
                            className="object-cover w-10 h-10 rounded-full shrink-0"
                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/4/drop-8.png"
                            alt=""
                          />
                          <div className="ml-4">
                            <p className="text-base font-bold text-gray-900">
                              <a href="#" title="">
                                Flo-Jo
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                ></span>
                              </a>
                            </p>
                            <p className="text-sm font-medium text-gray-500 mt-0.5">
                              4200 NFTs
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        2,388 SOL
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-right text-gray-900 bg-white sm:px-6 whitespace-nowrap">
                        9.37 SOL
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
