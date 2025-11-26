"use client";

import React from "react";

function Hero() {
  return (
    <div>
      <section className="relative pt-20 md:pt-44 lg:pb-36 bg-black overflow-hidden">
        <div className="hidden lg:flex absolute top-0 left-0 w-2/5 xl:w-1/2 max-w-4xl h-full px-10 items-end justify-end">
          <img
            className="relative z-10 block w-full max-w-xs xl:max-w-sm"
            src="/contentimage/hero/phone-frame-dark-parts.png"
            alt=""
          />
          <img
            className="absolute right-0 mr-32 xl:mr-52 -mb-52 h-166"
            src="suncealand-assets/background/red-lines.svg"
            alt=""
          />
        </div>
        <div className="relative container px-4 mx-auto">
          <div className="max-w-lg lg:max-w-xl mx-auto lg:mr-0">
            <div className="inline-flex px-5 py-2 items-center mb-8 bg-white rounded-full">
              <span className="block w-2 h-2 mr-2 rounded-full bg-blue-500"></span>
              <span className="uppercase text-sm font-medium tracking-tight text-neutral-800">
                APPLICATION
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-heading font-semibold text-white mb-2">
              Download app.
            </h1>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white mb-18">
              Don’t wait again.
            </h2>
            <a
              className="group relative inline-block h-16 w-full sm:w-52 bg-white rounded"
              href="#"
            >
              <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                <div className="flex h-full w-full items-center justify-center bg-gray-900 border-2 border-white rounded">
                  <span className="text-base font-semibold text-white uppercase">
                    Download
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="lg:hidden mt-24 relative">
            <img
              className="relative z-10 block w-full max-w-lg mx-auto"
              src="/contentimage/hero/phone-frame-dark-parts.png"
              alt=""
            />
            <img
              className="absolute bottom-0 left-0 h-64 sm:h-112 sm:h-166"
              src="suncealand-assets/background/red-lines.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
