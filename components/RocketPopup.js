import React from "react";

const RocketPopup = ({ rocket, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-md shadow-lg p-6 max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold mb-4">{rocket.rocket_name}</h2>
        <div className="space-y-4">
          <p className="text-gray-600">Description: {rocket.description}</p>
          <p className="text-gray-600">Country: {rocket.country}</p>
          <p className="text-gray-600">
            Cost per Launch: ${rocket.cost_per_launch}
          </p>
          <p className="text-gray-600">Launch Date: {rocket.first_flight}</p>
          <p className="text-gray-600">
            Dimension: {rocket.height.meters}m x {rocket.diameter.meters}m
          </p>
          <p className="text-gray-600">Mass: {rocket.mass.kg}kg</p>
          <p className="text-gray-600">
            Success Rate: {rocket.success_rate_pct}%
          </p>
          <p className="text-gray-600">Stage: {rocket.stage}</p>
        </div>

        {/* Additional rocket data can be displayed here */}
      </div>
    </div>
  );
};

export default RocketPopup;
