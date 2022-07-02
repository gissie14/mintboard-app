import React from "react";

export const Sent = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <svg
            className="w-12 h-12 mx-auto text-gray-900 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="mt-6 text-xl font-bold text-gray-900">
            Mint Successful
          </p>
          <p className="mt-2 text-base font-medium text-gray-500">
            This can take a few minutes depending on gas
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-8 overflow-hidden bg-white shadow-xl md:mt-12 rounded-xl shadow-gray-400/10">
          <div className="p-6">
            <div className="sm:flex">
              <div className="shrink-0">
                <img
                  className="object-cover h-auto mx-auto rounded-xl w-52 sm:mx-0"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint-success/2/image.png"
                  alt=""
                />

                <div className="mt-5">
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                    role="button"
                  >
                    View on Opensea
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:ml-8 sm:mt-0">
                <p className="text-2xl font-bold text-gray-900">Sad Ape #258</p>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-center justify-between">
                    <p className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                      Owned by:
                    </p>
                    <div className="flex items-end justify-end">
                      <div className="relative inline-flex items-center justify-center shrink-0 w-7 h-7">
                        <div className="absolute inset-0">
                          <img
                            className="w-full h-full object-coveer"
                            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint-success/1/avatar-background.png"
                            alt=""
                          />
                        </div>
                        <div className="relative text-xs font-bold text-white uppercase">
                          FA
                        </div>
                      </div>
                      <p className="text-base font-bold text-gray-900">
                        0xf99...28C
                      </p>
                    </div>
                  </li>

                  <li className="flex items-center justify-between">
                    <p className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                      Asset ID:
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      1rj949940l1kd0ie095941
                    </p>
                  </li>

                  <li className="flex items-center justify-between">
                    <p className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                      Current Price:
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      Ξ 1.9 ETH
                    </p>
                  </li>
                </ul>

                <p className="mt-6 text-xs font-bold tracking-wide text-gray-500 uppercase">
                  Description:
                </p>
                <p className="mt-4 text-sm font-medium text-gray-900">
                  An NFT is a digital asset that represents real-world objects
                  like art, music, in-game products and videos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
