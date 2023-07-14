"use client";

import React from "react";
import { rockets } from "@/utils/rocket-data";
import { useState } from "react";
import RocketCard from "@/components/RocketCard";
import RocketPopup from "./RocketPopup";

// const RocketPopup = ({ rocket, onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-md shadow-lg p-6 max-w-md">
//         <h2 className="text-2xl font-semibold mb-4">{rocket.name}</h2>
//         <p className="text-gray-600">
//           Cost per Launch: ${rocket.cost_per_launch}
//         </p>
//         <p className="text-gray-600">Success Rate: {rocket.success_rate}%</p>
//         {/* Additional rocket data can be displayed here */}
//         <button
//           className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

const MainSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRockets, setFilteredRockets] = useState(rockets);
  const [selectedRocket, setSelectedRocket] = useState(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterRockets(value);
  };

  const filterRockets = (value) => {
    const filtered = rockets.filter((rocket) => {
      const name = rocket.rocket_name.toLowerCase();
      const cost = rocket.cost_per_launch.toString();
      const successRate = rocket.success_rate_pct.toString();
      return (
        name.includes(value.toLowerCase()) ||
        cost.includes(value) ||
        successRate.includes(value)
      );
    });
    setFilteredRockets(filtered);
  };

  const handleItemClick = (rocket) => {
    // Handle displaying item data in a popup
    setSelectedRocket(rocket);

    console.log(rocket);
  };

  const handleClosePopup = () => {
    setSelectedRocket(null);
  };
  return (
    <div>
      <section className="mb-12 px-10 text-white">
        {/* Search form section goes here */}
        <div className="my-4">
          <div className="mb-6 text-lg font-bold">Fliter By</div>
          <input
            type="text"
            placeholder="Rocket name, cost per Launch, success rate"
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-white text-black rounded-md shadow-md p-4 md:w-1/2 w-full"
          />
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {filteredRockets.map((rocket, index) => (
            <RocketCard
              key={index}
              rocket={rocket}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </section>

      {selectedRocket && (
        <RocketPopup rocket={selectedRocket} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default MainSection;
