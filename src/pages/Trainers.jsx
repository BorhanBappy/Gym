import React from "react";

function Trainers() {
  return (
    <div className=" pt-10">
      <h1 className="text-4xl py-4  text-center">
        <span className="text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text ">
          Trainer&apos;S
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* <!-- Trainer 1 --> */}
  <div className="bg-white p-4 shadow-md rounded-lg">
    <img src="/images/trainer1.jpg" alt="Trainer 1" className="w-full h-48 object-cover rounded-md"/>
    <h2 className="text-xl font-semibold mt-2  text-black">Trainer 1 Name</h2>
    <p className="text-gray-600 text-sm mt-2">One-sentence description of Trainer 1.</p>
  </div>

  {/* <!-- Trainer 2 --> */}
  <div className="bg-white p-4 shadow-md rounded-lg">
    <img src="/images/trainer2.jpg" alt="Trainer 2" className="w-full h-48 object-cover rounded-md"/>
    <h2 className="text-xl font-semibold mt-2  text-black">Trainer 2 Name</h2>
    <p className="text-gray-600 text-sm mt-2">One-sentence description of Trainer 2.</p>
  </div>

  {/* <!-- Trainer 3 --> */}
  <div className="bg-white p-4 shadow-md rounded-lg">
    <img src="/images/trainer3.jpg" alt="Trainer 3" className="w-full h-48 object-cover rounded-md"/>
    <h2 className="text-xl font-semibold mt-2  text-black">Trainer 3 Name</h2>
    <p className="text-gray-600 text-sm mt-2">One-sentence description of Trainer 3.</p>

  </div>

  {/* <!-- Trainer 4 --> */}
  <div className="bg-white p-4 shadow-md rounded-lg">
    <img src="/images/trainer4.jpg" alt="Trainer 4" className="w-full h-48 object-cover rounded-md"/>
    <h2 className="text-xl font-semibold mt-2  text-black">Trainer 4 Name</h2>
    <p className="text-gray-600 text-sm mt-2">One-sentence description of Trainer 4.</p>
  </div>

  {/* <!-- Trainer 5 --> */}
  <div className="bg-white p-4 shadow-md rounded-lg">
    <img src="/images/trainer5.jpg" alt="Trainer 5" className="w-full h-48 object-cover rounded-md"/>
    <h2 className="text-xl font-semibold mt-2  text-black">Trainer 5 Name</h2>
    <p className="text-gray-600 text-sm mt-2">One-sentence description of Trainer 5.</p>
  </div>

  {/* <!-- Trainer 6 --> */}
  <div className="bg-white p-4 shadow-md rounded-lg">
    <img src="/images/trainer6.jpg" alt="Trainer 6" className="w-full h-48 object-cover rounded-md"/>
    <h2 className="text-xl font-semibold mt-2 text-black">Trainer 6 Name</h2>
    <p className="text-gray-600 text-sm mt-2">One-sentence description of Trainer 6.</p>
  </div>

  
</div>

    </div>
  );
}

export default Trainers;
