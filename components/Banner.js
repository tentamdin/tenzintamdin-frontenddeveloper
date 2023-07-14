import React from "react";

const Banner = () => {
  return (
    <section className="mb-12 flex items-center text-white">
      {/* Banner section goes here */}
      <div className="w-2/3">
        <div className="px-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Explore the Future with SpaceX Rockets
          </h1>
          <p className="text-md  sm:text-lg text-gray-400">
            Unleash the power of innovation and space exploration with the
            cutting-edge rockets from SpaceX.
          </p>
        </div>
      </div>
      <div className="w-1/3">
        <img
          src="/spacex_starship.jpeg"
          alt="Product Image"
          className="w-3/4 rounded-md"
        />
      </div>
    </section>
  );
};

export default Banner;
