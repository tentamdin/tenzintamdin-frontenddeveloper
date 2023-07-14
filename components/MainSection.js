"use client";

import React from "react";
import { rockets } from "../utils/rocket-data";
import { useState, useEffect } from "react";
import RocketCard from "../components/RocketCard";
import RocketPopup from "./RocketPopup";

const MainSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [selectedRocket, setSelectedRocket] = useState(null);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await fetch("/api/home");
        const data = await response.json();
        console.log("data", data.data);
        setFilteredRockets(data.data);
      } catch (error) {
        console.error("Error fetching SpaceX rockets:", error);
      }
    };

    fetchRockets();
  }, []);

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
    <div className="h-full">
      <section className="mb-12 px-10 text-white">
        {/* Search form section goes here */}
        <div className="my-4">
          <div className="mb-6 text-md sm:text-lg font-bold">Filter By</div>
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
