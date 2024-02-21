import React from "react";

function About() {
  return (
    <>
      <div>
        <div className=" text-center p-4 pt-10 ">
          <h1 className="text-4xl py-4 ">
            <span className="text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text">
              About Us
            </span>
          </h1>
          <h4 className=" text-2xl py-4 text-white">Welcome to Borhan&apos;s GYM !</h4>
          <p className=" text-[#14DCEB] text-lg">
            At Borhan&apos;s, we&apos;re more than just a place to work out;
            we&apos;re a community of fitness enthusiasts, dedicated to helping
            you achieve your health and wellness goals. Our gym is not just a
            space filled with equipment; it&apos;s a place where you can
            transform your life, one workout at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Trainer 1 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="/images/avatar1.jpg"
              alt="Trainer 1"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl text-black font-semibold mt-2"> Name</h2>
            <p className="text-gray-600 text-sm mt-2"> Founder</p>
          </div>

          {/* Trainer 2 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="/images/avatar2.jpg"
              alt="Trainer 2"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl text-black font-semibold mt-2"> Name</h2>
            <p className="text-gray-600 text-sm mt-2"> Co-Founder</p>
          </div>

          {/* Trainer 3 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="/images/avatar3.jpg"
              alt="Trainer 3"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl text-black font-semibold mt-2"> Name</h2>
            <p className="text-gray-600 text-sm mt-2">
               Wellness Advisor
            </p>
          </div>

          {/* Trainer 4 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="/images/avatar4.jpg"
              alt="Trainer 4"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl text-black font-semibold mt-2"> Name</h2>
            <p className="text-gray-600 text-sm mt-2">
               Chief Operations Officer
            </p>
          </div>

          {/* Trainer 5 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="/images/avatar5.jpg"
              alt="Trainer 5"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl text-black font-semibold mt-2"> Name</h2>
            <p className="text-gray-600 text-sm mt-2">
               Program Director
            </p>
          </div>

          {/* Trainer 6 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="/images/avatar6.jpg"
              alt="Trainer 6"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl text-black font-semibold mt-2">Name</h2>
            <p className="text-gray-600 text-sm mt-2">
               Community Manager
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
