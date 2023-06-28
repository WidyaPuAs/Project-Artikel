import React, { useState, useEffect } from "react";
import Navbarguest from "../components/layout/navbar/navbarguest";
import Carousel from "../components/carousel/carousel";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Navbarguest />
        <div className="hero w-full h-[42rem] border-black border">
          <Carousel/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
