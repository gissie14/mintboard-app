import React from "react";

export const Send = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-sm mx-auto border border-gray-200 rounded-md">
          <div className="p-6 sm:p-8">
            <ol
              role="list"
              className="flex items-center justify-center space-x-4"
            >
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-900"
                >
                  Select
                </a>
              </li>

              <li>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a
                    href="#"
                    title=""
                    className="ml-4 text-base font-medium text-gray-900"
                  >
                    Mint
                  </a>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <a
                    href="#"
                    title=""
                    className="ml-4 text-base font-medium text-gray-500 hover:text-gray-900"
                    aria-current="page"
                  >
                    Success
                  </a>
                </div>
              </li>
            </ol>

            <div className="mt-8 bg-white rounded-lg">
              <div className="p-4">
                <div className="flex items-center">
                  <img
                    className="w-12 h-auto rounded-lg shrink-0"
                    src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint/3/image.png"
                    alt=""
                  />
                  <div className="flex-1 ml-4">
                    <p className="text-lg font-bold text-gray-900">
                      Easy Sweep
                    </p>
                    <p className="mt-1 text-base font-medium text-gray-500">
                      364/1000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-gray-200" />

            <div className="mt-6 space-y-6 text-center">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Select Quantity
                </label>
                <div className="flex items-center justify-center mt-5 space-x-5">
                  <button
                    type="button"
                    className="p-1 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>

                  <span className="px-6 py-1 text-base font-semibold text-gray-900 bg-white border border-gray-200 rounded-md">
                    1
                  </span>

                  <button
                    type="button"
                    className="p-1 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <div className="relative mt-3">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img
                      className="w-auto h-5"
                      src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint/3/ethereum-logo.svg"
                      alt=""
                    />
                  </div>

                  <div className="block w-full py-2 pl-10 pr-4 text-base font-bold text-center text-gray-900 bg-white border border-gray-200 rounded-md">
                    0.72
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700"
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
