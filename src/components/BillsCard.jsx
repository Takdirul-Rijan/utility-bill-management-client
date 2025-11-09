import React from "react";
import { useNavigate } from "react-router";

const BillsCard = ({ bill }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl 
                 transition-all duration-300 overflow-hidden border border-gray-100 
                 flex flex-col"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={bill.image}
          alt={bill.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow p-5">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
            {bill.title}
          </h3>
          <p className="text-gray-600 text-sm">{bill.category}</p>
          <p className="text-gray-500 text-sm">{bill.location}</p>
          <p className="text-gray-400 text-sm mt-2">
            {new Date(bill.date).toLocaleDateString()}
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate(`/bills/${bill._id}`)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
                       px-6 py-2 rounded-full shadow-md hover:shadow-lg 
                       hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillsCard;
