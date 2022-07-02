import React, { useState } from 'react'

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 bg-black">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <img
              className="w-auto h-8"
              src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-symbol.svg"
              alt=""
            />
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:col-span-2">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
              <div>
                <h6 className="font-serif text-lg font-semibold text-white">
                  About
                </h6>

                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Egestas
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Neque
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Suscipit
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="font-serif text-lg font-semibold text-white">
                  Courses
                </h6>

                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Morbi
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Pellentesque
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Eget
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Sollicitudin
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Eleifend
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Accumsan
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
              <div>
                <h6 className="font-serif text-lg font-semibold text-white">
                  Legals
                </h6>

                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Neque
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Nulla
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Convallis
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Vitae
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="font-serif text-lg font-semibold text-white">
                  Blog
                </h6>

                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Magna
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Aenean
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      Pellentesque
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"
                    >
                      In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
