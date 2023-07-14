import React from "react";

const RocketCard = ({ rocket, onItemClick }) => {
  return (
    <div
      className="bg-white rounded-md shadow-lg p-6 cursor-pointer"
      onClick={() => onItemClick(rocket)}
    >
      <h2 className=" text-lg sm:text-xl font-semibold text-black">
        {rocket.name || rocket.rocket_name}
      </h2>
      <p className="text-gray-600 truncate">{rocket.description}</p>
      <div className="mt-4">
        <span className="text-gray-700">Country: {rocket.country}</span>
      </div>
      <div className="mt-4">
        <span className="text-gray-700">
          First Flight: {rocket.first_flight}
        </span>
      </div>
      <div className="mt-4">
        <span className="text-gray-700">
          Cost per Launch: ${rocket.cost_per_launch}
        </span>
      </div>
      <div className="mt-4">
        <span className="text-gray-700">
          Success rate: {rocket.success_rate_pct}%
        </span>
      </div>
    </div>
  );
};

export default RocketCard;
