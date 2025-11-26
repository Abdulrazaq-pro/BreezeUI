"use client";

import React from "react";

function CTA1() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/2 p-4">
            <div
              className="group relative overflow-hidden rounded-2xl"
              style={{ height: 569 }}
            >
              <div className="absolute z-10 bottom-0 left-0 p-6">
                <h3 className="font-heading text-6xl text-neutral-400">
                  Style and Fashion Inspiration
                </h3>
              </div>
              <img
                className="absolute w-full h-full transform group-hover:scale-105 rounded-2xl object-cover transition duration-200"
                src="/contentimage/cta/woman.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="p-8 flex flex-col justify-between h-full border border-neutral-100 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 transition-colors duration-300">
              <div className="w-full mb-16">
                <h3 className="mb-4 font-heading text-6xl text-neutral-900 dark:text-white">
                  Improve your style with our Premium collection
                </h3>
                <p className="text-lg text-neutral-900 dark:text-neutral-300 font-semibold">
                  Stay Ahead of the Fashion Game with Our Comprehensive Trend
                  Reports, Covering Everything from Runway to Street Style
                </p>
              </div>
              <div className="w-full">
                <a
                  href="#"
                  className="bg-green-900 dark:bg-green-700 rounded-full hover:bg-green-800 dark:hover:bg-green-600 focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 text-sm text-white font-semibold px-8 h-12 inline-flex items-center transition duration-200"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA1;
