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
    </>
  );
}

export default Home;
