"use client";

import React, { useState } from "react";
import Image from "next/image";

// Inline SVG for the menu icon (Hamburger)
// const MenuIcon = (props) => (
//   <svg
//     className="block h-6 w-6 fill-current"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//   </svg>
// );

// Inline SVG for the close icon (X)
// const CloseIcon = (props) => (
//   <svg
//     className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     {...props}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M6 18L18 6M6 6l12 12"
//     ></path>
//   </svg>
// );

// Inline SVG for the separator dots
const SeparatorDots = () => (
  <svg
    className="w-4 h-4 current-fill text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    ></path>
  </svg>
);

export default function CTA2() {
  // 1. Replaced Alpine.js x-data with React useState
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // A list of navigation items
  const navItems = [
    { name: "Start", href: "#start" },
    { name: "About Us", href: "#about", isActive: true },
    { name: "Services", href: "#services" },
    { name: "Platform", href: "#platform" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const socialLinks = [
    { icon: "F", href: "#facebook" }, // Placeholder text for social icons
    { icon: "T", href: "#twitter" },
    { icon: "I", href: "#instagram" },
  ];

  // Main component structure
  return (
    <div className="font-['Inter'] antialiased">
      <section className="relative overflow-hidden bg-white">
        {/* Decorative Background Lines (Replaced image URL with a simple div for stability) */}
        <div className="hidden lg:block absolute inset-0 w-full opacity-20 bg-gradient-to-br from-white to-gray-100"></div>

        {/* Navigation Bar */}
        <nav className="relative px-6 py-6 flex justify-between items-center z-10">
          <a className="text-3xl font-bold leading-none" href="#">
            {/* Replaced placeholder logo image with a text/placeholder logo */}
            <div className="h-12 w-32 bg-green-600 flex items-center justify-center rounded-lg text-white font-black text-xl shadow-lg">
              ATIS
            </div>
          </a>

          {/* Mobile Menu Button */}
          {/* <div className="lg:hidden">
            <button
              onClick={() => setMobileNavOpen(true)} // 2. Replaced x-on:click with onClick
              className="flex items-center text-gray-800 p-3 rounded-md hover:bg-gray-100 transition"
            >
                <MenuIcon />
            </button>
          </div> */}

          {/* Desktop Navigation Links */}
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <li>
                  <a
                    className={`text-sm hover:text-green-600 transition ${
                      item.isActive
                        ? "text-green-600 font-bold"
                        : "text-gray-500"
                    }`}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
                {/* Add separator if it's not the last item */}
                {index < navItems.length - 1 && (
                  <li className="text-gray-800">
                    <SeparatorDots />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <a
            className="hidden lg:inline-block py-2 px-6 bg-green-50 hover:bg-green-100 text-sm text-green-600 font-bold rounded-xl transition duration-200 shadow-md"
            href="#contact"
          >
            Contact Us
          </a>
        </nav>

        {/* Hero Section / Call to Action Content */}
        <div className="relative pt-20 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-6 text-5xl lg:text-6xl font-extrabold font-heading">
                      <span>Build & Launch without</span>
                      <span className="text-green-600"> problems</span>
                    </h2>
                  </div>
                  <div className="max-w-md mx-auto lg:mx-0">
                    <p className="mb-8 text-lg text-gray-500 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      <a
                        className="inline-block w-full sm:w-auto py-3 px-8 leading-none bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-200 shadow-lg"
                        href="#get-started"
                      >
                        Get Started
                      </a>
                      <a
                        className="inline-block w-full sm:w-auto py-3 px-8 leading-none font-semibold bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-xl transition duration-200 shadow-lg"
                        href="#how-it-works"
                      >
                        How it works
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                <Image
                  className="w-full max-w-lg rounded-3xl shadow-2xl"
                  src="https://placehold.co/600x400/10B981/ffffff?text=Product+Illustration"
                  alt="A man sitting on a chair, representing business success."
                  width={600}
                  height={400}
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const img = e.currentTarget;
                    img.onerror = null;
                    img.src =
                      "https://placehold.co/600x400/10B981/ffffff?text=Product+Illustration";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Menu (Conditional Rendering based on state) */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 transition-transform duration-300 ease-in-out ${
            mobileNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Overlay */}
          <div
            onClick={() => setMobileNavOpen(false)} // 3. Replaced x-on:click with onClick
            className="fixed inset-0 bg-gray-800 opacity-25"
          ></div>

          {/* Sidebar Content */}
          <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                {/* Logo in sidebar */}
                <div className="h-10 w-28 bg-green-600 flex items-center justify-center rounded-lg text-white font-black text-lg">
                  ATIS
                </div>
              </a>
              {/* <button onClick={() => setMobileNavOpen(false)}> 
                <CloseIcon />
              </button> */}
            </div>

            {/* Mobile Nav Links */}
            <div>
              <ul>
                {navItems.map((item) => (
                  <li className="mb-1" key={item.name}>
                    <a
                      className="block p-4 text-sm font-semibold text-gray-500 hover:bg-green-50 hover:text-green-600 rounded-lg transition"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Sign In/Up and Footer */}
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                  href="#sign-in"
                >
                  Sign In
                </a>
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-xl transition"
                  href="#sign-up"
                >
                  Sign Up
                </a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>© 2025 All rights reserved.</span>
              </p>
              <div className="text-center">
                {socialLinks.map((link) => (
                  <a
                    className="inline-block px-1 text-green-600 text-xl font-bold"
                    href={link.href}
                    key={link.icon}
                  >
                    {link.icon}{" "}
                    {/* Using letters as placeholders for social icons */}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
