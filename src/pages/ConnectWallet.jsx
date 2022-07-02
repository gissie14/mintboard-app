import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "components/Layout";

export const ConnectWallet = () => {
  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <p>
          <Link to="/">top</Link>
        </p>
        <p>
          <Link to="/mypage">mypage</Link>
        </p>
        <p>
          <Link to="/mint">mint</Link>
        </p>
        <p>
          <Link to="/collection">collection</Link>
        </p>
        <p>
          <Link to="/collection/1111">collection id</Link>
        </p>
        <p>
          <Link to="/collection/1111/1111">send</Link>
        </p>
        <p>
          <Link to="/collection/1111/1111/sent">sent</Link>
        </p>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Connect your wallet
            </h2>
            <p className="mt-2 text-base font-medium text-gray-500">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          <div className="max-w-md mx-auto mt-8 border border-gray-200 divide-y divide-gray-200 rounded-xl">
            <div className="relative px-5 py-4 transition-all duration-200 group hover:shadow-lg rounded-t-xl">
              <div className="flex items-center justify-between">
                <img
                  className="w-auto h-8 shrink-0"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/3/metamask-logo.png"
                  alt=""
                />
                <p className="flex-1 ml-4 mr-auto text-base font-bold text-gray-900">
                  Metamask
                </p>

                <a
                  href="#"
                  title=""
                  className="text-gray-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
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
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            </div>

            <div className="relative px-5 py-4 transition-all duration-200 group hover:shadow-lg">
              <div className="flex items-center justify-between">
                <img
                  className="w-auto h-8 shrink-0"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/3/coinbase-logo.png"
                  alt=""
                />
                <p className="flex-1 ml-4 mr-auto text-base font-bold text-gray-900">
                  Coinbase Wallet
                </p>

                <a
                  href="#"
                  title=""
                  className="text-gray-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
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
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            </div>

            <div className="relative px-5 py-4 transition-all duration-200 group hover:shadow-lg">
              <div className="flex items-center justify-between">
                <img
                  className="w-auto h-8 shrink-0"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/3/fortmatic-logo.png"
                  alt=""
                />
                <p className="flex-1 ml-4 mr-auto text-base font-bold text-gray-900">
                  Fortmatic
                </p>

                <a
                  href="#"
                  title=""
                  className="text-gray-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
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
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            </div>

            <div className="relative px-5 py-4 transition-all duration-200 group hover:shadow-lg rounded-b-xl">
              <div className="flex items-center justify-between">
                <img
                  className="w-auto h-8 shrink-0"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/3/wallet-connect-logo.png"
                  alt=""
                />
                <p className="flex-1 ml-4 mr-auto text-base font-bold text-gray-900">
                  Wallet Connect
                </p>

                <a
                  href="#"
                  title=""
                  className="text-gray-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
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
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
