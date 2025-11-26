"use client";

import React from "react";

export default function CTA2() {
  return (
    <section className="relative overflow-hidden dark:bg-gray-900">
      <img
        className="hidden lg:block absolute inset-0 w-full"
        src="atis-assets/background/lines.svg"
        alt=""
      />
      <nav className="relative px-6 py-6 flex justify-between items-center">
        <a className="text-3xl font-bold leading-none" href="#">
          <img
            className="h-12"
            src="/contentimage/cta/atis-mono-black.svg"
            alt=""
          />
        </a>
        <div className="lg:hidden">
          <button className="flex items-center text-gray-400 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500 dark:text-gray-300"
              href="#"
            >
              Start
            </a>
          </li>
          <li className="text-gray-800 dark:text-gray-200">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01"
              />
            </svg>
          </li>

          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500 dark:text-gray-300"
              href="#"
            >
              Services
            </a>
          </li>
          <li className="text-gray-800 dark:text-gray-200">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500 dark:text-gray-300"
              href="#"
            >
              Platform
            </a>
          </li>
          <li className="text-gray-800 dark:text-gray-200">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500 dark:text-gray-300"
              href="#"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-green-600 font-bold rounded-l-xl rounded-t-xl transition duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-green-400"
          href="#"
        >
          Contact Us
        </a>
      </nav>

      <div className="relative pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
              <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0">
                  <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white">
                    <span>Build & Launch without </span>
                    <span className="text-green-600 dark:text-green-400">
                      problems
                    </span>
                  </h2>
                </div>
                <div className="max-w-sm mx-auto lg:mx-0">
                  <p className="mb-6 text-gray-400 leading-loose dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque efficitur nisl sodales egestas lobortis.
                  </p>
                  <div>
                    <a
                      className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      Get Started
                    </a>
                    <a
                      className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      How it works
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
              <img
                src="/contentimage/cta/men-on-chair-light-green.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
