import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router";

const BillDetails = () => {
  const bill = useLoaderData();
  //   console.log(bill);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
        <div className="h-[300px] md:h-[450px] w-full overflow-hidden">
          <img
            src={bill.image}
            alt={bill.title}
            className="w-full h-full object-center"
          />
        </div>

        <div className="p-6 md:p-10 space-y-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              {bill.title}
            </h1>
            <span className="px-4 py-1 rounded-full text-sm md:text-base font-medium bg-purple-100 text-purple-700">
              {bill.category}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm md:text-base">
            <p className="flex items-center gap-1">
              <CiLocationOn /> {bill.location}
            </p>
            <p className="flex items-center gap-2">
              <SlCalender /> {new Date(bill.date).toLocaleDateString()}
            </p>
            <p className="flex items-center gap-2">
              <FaSackDollar />

              <span className="font-semibold text-gray-700">
                ${bill.amount}
              </span>
            </p>
          </div>

          <div className="border-t border-gray-200 pt-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {bill.description}
            </p>
          </div>

          <div className="pt-6">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-md hover:shadow-lg"
            >
              <span className="flex items-center gap-1">
                <IoArrowBack />
                Back to All Bills
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillDetails;
