import React from "react";

const RocketCard = ({ rocket }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-xl font-semibold">{rocket.name}</h2>
      <p className="text-gray-600">{rocket.description}</p>
      <div className="mt-4">
        <span className="text-gray-700">Country: {rocket.country}</span>
      </div>
    </div>
  );
};

const rockets = [
  {
    name: "Falcon 1",
    description: "The Falcon 1 was SpaceX's first orbital launch vehicle.",
    country: "United States",
  },
  {
    name: "Falcon 9",
    description:
      "The Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for reliable transport of satellites and the Dragon spacecraft.",
    country: "United States",
  },
  {
    name: "Falcon Heavy",
    description:
      "The Falcon Heavy is a reusable super heavy-lift launch vehicle developed and manufactured by SpaceX.",
    country: "United States",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Rockets for SpaceX</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rockets.map((rocket, index) => (
          <RocketCard key={index} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export default Home;
