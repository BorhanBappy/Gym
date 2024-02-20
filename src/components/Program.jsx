// Program.js

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Programs } from "./Data";

function Program() {
  return (
    <>
      <div className="text-4xl text-center text-orange-400 mb-4">Programs </div>
      <div className="mb-8  grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {Programs.map((program, index) => (
          <div key={index} className="p-4 border rounded-lg text-center">
            <h3 className="font-semibold text-[#EBC8F9] text-sm lg:text-lg">
              {program.title}
            </h3>
            <img
              src={program.icon}
              alt={program.title}
              className="mt-2  mx-auto w-32 h-32 p-4"
            />
            {/* Use Link to navigate to program details */}
            <Link
              to={`/program-details/${program.ID}`} // Include the program's ID in the URL
              className="mt-20 bg-blue-500 text-white font-bold text-sm lg:text-lg py-2 px-4 rounded-full hover:bg-blue-600 "
            >
              Go to Program details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Program;
