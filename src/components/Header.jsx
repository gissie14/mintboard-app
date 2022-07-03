import React, { useState } from "react";

export const Header = ({ currentAccount, connectWalletHandler }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="py-4 bg-white sm:py-3 border-b border-gray-100">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a href="/" className="flex">
              {/*<img
                  className="w-auto h-8"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg"
                  alt=""
  ></img>*/}
              MintBoard
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              <span
                style={{ display: expanded ? "none" : "block" }}
                aria-hidden="true"
              >
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>

              <span
                style={{ display: expanded ? "block" : "none" }}
                aria-hidden="true"
              >
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="hidden md:space-x-10 md:items-center md:justify-center md:flex">
            <a
              href={`/collection/${currentAccount}`}
              title=""
              className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600"
            >
              Collection
            </a>

            <a
              href="/mint"
              title=""
              className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600"
            >
              New Mint
            </a>
          </div>

          <div className="hidden md:flex">
            {!currentAccount ? (
              <a
                href="/connect"
                className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                onClick={connectWalletHandler}
              >
                Connect Wallet
              </a>
            ) : (
              <a
                href="/connect"
                className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                connected
              </a>
            )}
          </div>
        </nav>

        <nav style={{ display: expanded ? "block" : "none" }}>
          <div className="px-1 pt-8 pb-4">
            <div className="grid gap-y-6">
              <a
                href="#"
                title=""
                className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
              >
                Services
              </a>

              <a
                href="#"
                title=""
                className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
              >
                Latest Collections
              </a>

              <a
                href="#"
                title=""
                className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
              >
                Blog
              </a>

              <a
                href="/conect"
                className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
