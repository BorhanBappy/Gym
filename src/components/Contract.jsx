import React from "react";

function Contract() {
  return (
    <div className="contract-page bg-dot-bg text-white p-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Borhan&apos;s Gym Membership Contract
      </h2>
      <p className="text-lg mb-4 text-center">
        Thank you for choosing Borhan&apos;s Gym! Please review the terms and
        conditions of your membership below:
      </p>
      <div className="flex justify-center space-x-40 m-16">
        <div className="contract-details mb-6">
          <h3 className="text-xl font-semibold mb-2">Contact Information:</h3>
          <p>
            <strong>Gym Name:</strong> Borhan&apos;s Gym
          </p>
          <p>
            <strong>Address:</strong> Mirzapur, Tangail
          </p>
          <p>
            <strong>Email:</strong> your-email@gmail.com
          </p>
          <p>
            <strong>Mobile Number:</strong> 0000
          </p>
        </div>
        <div className="contract-terms">
          <h3 className="text-xl font-semibold mb-2">
            Membership Terms and Conditions:
          </h3>
          <ul className="list-disc pl-6">
            <li>Membership duration: 6 months</li>
            <li>Monthly fee: $50</li>
            <li>Payment due on the 1st of every month</li>
            {/* Add more terms and conditions here */}
          </ul>

          <button className="bg-blue-500 text-white font-semibold px-4 py-2 mt-4 rounded hover:bg-blue-600">
            Accept Terms and Sign
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contract;
