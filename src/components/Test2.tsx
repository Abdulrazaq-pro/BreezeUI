import React from "react";

export default function Test2() {
  return (
    <section className="relative py-20 2xl:py-40 bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <img
              className="max-w-md mx-auto object-cover"
              src="/features/zospace_app1.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-xl">
              <a className="inline-block text-2xl font-bold" href="#">
                <img
                  className="h-7"
                  src="zospace-assets/logos/zospace-logo.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <h2 className="my-14 text-5xl md:text-7xl font-bold font-heading text-white">
                Yes! Collaborate everywhere
              </h2>
              <p className="mb-10 text-xl text-gray-200">
                In general, dignissim accumsan, lacus vel dictum semper, ipsum
                justo fermentum ex, sagittis sollicitudin.
              </p>
              <p className="mb-20 text-xl text-gray-200">
                This morning, platea dictumst nec nunc. In hac habitasse.
              </p>
              <a
                className="inline-block px-12 py-5 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-bold text-white transition duration-200"
                href="#"
              >
                Downolad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

