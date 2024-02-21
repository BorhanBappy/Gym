import React, { useState } from "react";

function Plan() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const commonStyle = "p-8 bg-yellow-100 ";
  const commonTextStyle = "text-yellow-700 text-2xl font-bold";
  const commonListStyle = "p-3 space-y-2 list-decimal text-left text-gray-950";
  const handleShow1Click = () => {
    setShow1(!show1);
    setShow2(false); // Reset the other buttons' state
    setShow3(false);
  };

  const handleShow2Click = () => {
    setShow2(!show2);
    setShow1(false); // Reset the other buttons' state
    setShow3(false);
  };
  //   console.log(show2);
  //   console.log(!show2);
  // console.log(" ")
  const handleShow3Click = () => {
    setShow3(!show3);
    setShow1(false); // Reset the other buttons' state
    setShow2(false);
  };
  // console.log(show1);
  // console.log(show2);
  // console.log(show3);

  return (
    <div className={`${show1 || show2 || show3 ? "mb-1" : " mb-60"} pt-10`}>
      <h1 className="text-4xl py-4  text-center">
        <span className="text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text ">
          Plan&apos;S
        </span>
      </h1>
      <div className="flex justify-between mx-24 mb-0">
        {/* Center the buttons */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleShow1Click}
        >
          Show Gold Gym Plan
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleShow2Click}
        >
          Silver
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleShow3Click}
        >
          Bronze
        </button>
      </div>

      <div className="text-center">
        {show1 && (
          <div className={commonStyle}>
            <h2 className={commonTextStyle}>
              <strong className="text-black">Description:</strong> The Gold Gym
              Plan is designed for individuals who are serious about their
              fitness goals and are looking for a comprehensive workout
              experience.
            </h2>
            <ul className={commonListStyle}>
              <li>
                Unlimited access to all gym facilities, including cardio
                equipment, weightlifting area, and group fitness classes.
              </li>
              {/* Add other Gold Gym Plan features here */}
            </ul>
          </div>
        )}

        {show2 && (
          <div className={commonStyle}>
            <h2 className={commonTextStyle}>
              <strong className="text-black">Description:</strong> The Silver
              Gym Plan offers a balanced fitness experience suitable for those
              who want access to quality equipment and guidance without the
              premium price.
            </h2>
            <ul className={commonListStyle}>
              <li>
                Full access to cardio and weightlifting areas during regular
                hours.
              </li>
              <li>Group fitness classes with flexible scheduling.</li>
              <li>Basic workout guidance and access to workout templates.</li>
              <li>Discounted rates for personal training sessions.</li>
              <li>Access to online fitness resources and tracking tools.</li>
              <li>Locker access during gym visits.</li>
            </ul>
          </div>
        )}

        {show3 && (
          <div className={commonStyle}>
            <h2 className={commonTextStyle}>
              <strong className="text-black">Description:</strong> The Bronze
              Gym Plan is an affordable option for individuals on a budget who
              still want access to a well-equipped gym.
            </h2>
            <ul className={commonListStyle}>
              <li>Access to the gym during off-peak hours.</li>
              <li>Limited access to cardio and weightlifting equipment.</li>
              <li>Self-guided workouts with basic orientation.</li>
              <li>
                Access to the gym&apos;s mobile app for tracking workouts and
                progress.
              </li>
              <li>No-frills membership with a focus on affordability.</li>
              <li>Access to water fountains and basic amenities.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Plan;
