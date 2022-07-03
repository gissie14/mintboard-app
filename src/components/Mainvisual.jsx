import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Mainvisual = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/background.png"
          alt=""
        />
      </div>
      <section className="relative py-12 sm:py-16 lg:pb-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center max-w-6xl grid-cols-1 mx-auto lg:grid-cols-2 gap-x-24 gap-y-12">
            <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:mx-0 lg:order-last">
              <h1 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl">
                Proof of Approver.
              </h1>
              <p className="max-w-md mx-auto mt-5 text-lg font-normal text-gray-400 lg:mx-0 lg:text-xl lg:leading-9 lg:mt-8">
                Non-transferable NFTs on MintBoard give you the value of who
                approve your request.
              </p>
            </div>

            <div>
              <div className="grid max-w-md grid-cols-2 gap-6 mx-auto lg:max-w-none lg:mx-0">
                <img
                  className="object-cover w-full h-full mx-auto rounded-lg"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-1.png"
                  alt=""
                />
                <img
                  className="object-cover w-full h-full mx-auto rounded-lg"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-2.png"
                  alt=""
                />
                <img
                  className="object-cover w-full h-full mx-auto transform rounded-lg rotate-3"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-4.png"
                  alt=""
                />
                <img
                  className="object-cover w-full h-full mx-auto rounded-lg"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-single/2/image-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
