import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
function MainHeader() {
  return (
    <header className="md:h-screen grid place-items-center">
      <div className="md:h-full grid grid-cols-2 md:gap-24 items-center justify-between">
          <div className="">
            <h4 className="text-2xl font-bold md:mb-4">#100DaysofWorkout</h4>
            <h1 className=" md:text-5xl font-bold">
              Join The Legends Of the Fitness World
            </h1>
            <p className=" text-amber-300 mb-6 mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, sequi.
            </p>

            <Link to="/plans" className=" p-2 bg-blue-500 rounded-3xl	">
              Get Started
            </Link>
          </div>
          
         
          <div className="">
          <img src={Image} alt="Main Header Image" />
          </div>
        </div>
    </header>
  );
}

export default MainHeader;
