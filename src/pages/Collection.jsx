import React, { useState } from "react";

export const Collection = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left lg:space-x-6">
          <h2 className="flex-1 text-2xl font-bold text-gray-900">
            Our Latest Apes
          </h2>

          <div className="hidden lg:items-center lg:justify-end lg:space-x-3 lg:flex">
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

        <div className="mt-12 sm:mt-16">
          <div className="flex w-full gap-6 pt-4 pb-8 -mt-4 overflow-x-auto snap-x">
            <div className="relative w-full overflow-hidden bg-white border border-gray-200 rounded-lg snap-start scroll-ml-6 shrink-0 lg:w-[286px] sm:w-1/2 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              <div className="p-4">
                <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-single/2/drop-1.png"
                    alt=""
                  />
                </div>

                <p className="mt-4 text-base font-bold text-gray-900">
                  <a href="#" title="">
                    Grave Digger
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </p>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  15/100 NFTs
                </p>

                <hr className="mt-4 border-gray-200" />
                <div className="grid grid-cols-2 mt-4 gap-x-6">
                  <div>
                    <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                      Base Price
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      2.1 ETH
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                      Current Bid
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      2.9 ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden bg-white border border-gray-200 rounded-lg snap-start scroll-ml-6 shrink-0 lg:w-[286px] sm:w-1/2 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              <div className="p-4">
                <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-single/2/drop-2.png"
                    alt=""
                  />
                </div>

                <p className="mt-4 text-base font-bold text-gray-900">
                  <a href="#" title="">
                    Cujo
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </p>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  43/100 NFTs
                </p>

                <hr className="mt-4 border-gray-200" />
                <div className="grid grid-cols-2 mt-4 gap-x-6">
                  <div>
                    <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                      Base Price
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      1.44 ETH
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                      Current Bid
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      1.9 ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden bg-white border border-gray-200 rounded-lg snap-start scroll-ml-6 shrink-0 lg:w-[286px] sm:w-1/2 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              <div className="p-4">
                <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-single/2/drop-3.png"
                    alt=""
                  />
                </div>

                <p className="mt-4 text-base font-bold text-gray-900">
                  <a href="#" title="">
                    Drugstore Cowboy
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </p>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  24/100 NFTs
                </p>

                <hr className="mt-4 border-gray-200" />
                <div className="grid grid-cols-2 mt-4 gap-x-6">
                  <div>
                    <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                      Base Price
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      2.1 ETH
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                      Current Bid
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      1.9 ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden bg-white border border-gray-200 rounded-lg snap-start scroll-ml-6 shrink-0 lg:w-[286px] sm:w-1/2 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              <div className="p-4">
                <div className="overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-single/2/drop-4.png"
                    alt=""
                  />
                </div>

                <p className="mt-4 text-base font-bold text-gray-900">
                  <a href="#" title="">
                    Keystone
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </p>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  19/100 NFTs
                </p>

                <hr className="mt-4 border-gray-200" />
                <div className="grid grid-cols-2 mt-4 gap-x-6">
                  <div>
                    <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                      Base Price
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      2.1 ETH
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                      Current Bid
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">
                      1.9 ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
