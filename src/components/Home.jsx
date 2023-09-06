import React from "react";
import MainHeader from "./MainHeader";
import Program from "./Program";
function Home() {
  return (
    <>
      <div className="ml-4 mr-6 md:mr-0  md:ml-32 ">
        <MainHeader />
        <Program />
      </div>
      <div className=" m-16 flex justify-between">
      </div>
    </>
  );
}

export default Home;
