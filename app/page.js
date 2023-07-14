import React from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import MainSection from "@/components/MainSection";

const Home = () => {
  return (
    <div className="bg-black h-full">
      {/* Navbar  goes here */}
      <Navbar />
      {/* Banner section goes here */}
      <Banner />
      {/* Fliter and grid  section goes here */}
      <MainSection />
    </div>
  );
};

export default Home;
