import React, { use, useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import { TbCurrencyTaka } from "react-icons/tb";

const BillDetails = () => {
  const bill = useLoaderData();
  const { user } = use(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const today = new Date();
  const billDate = new Date(bill.date);
  const isCurrentMonth =
    today.getMonth() === billDate.getMonth() &&
    today.getFullYear() === billDate.getFullYear();

  const handlePayBill = (e) => {
    e.preventDefault();
    const form = e.target;

    const billData = {
      email: form.email.value,
      billId: form.billId.value,
      amount: form.amount.value,
      username: form.name.value,
      address: form.address.value,
      phone: form.phone.value,
      date: form.date.value,
      additional: form.additional.value,
    };

    fetch("https://smart-bill-hub-server.vercel.app/myBills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(billData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Your bill has been paid successfully!");
        setIsModalOpen(false);
        form.reset();
      });
  };

  useEffect(() => {
    document.title = bill.title;
  }, [bill.title]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
        <div className="h-[300px] md:h-[450px] w-full overflow-hidden">
          <img
            src={bill.image}
            alt=""
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
            <p className="flex items-center gap-1">
              <FaSackDollar />
              <span className="flex items-center font-semibold text-gray-700">
                <TbCurrencyTaka size={20}></TbCurrencyTaka>
                <span>{bill.amount}</span>
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

          <div className="pt-6 flex justify-center items-center gap-6">
            <Link
              to="/"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium shadow-md hover:shadow-lg"
            >
              <span className="flex items-center gap-1">
                <IoArrowBack /> Back to All Bills
              </span>
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              disabled={!isCurrentMonth}
              className={`px-6 py-3 rounded-lg text-white font-medium shadow-md ${
                isCurrentMonth
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Pay Bill
            </button>
          </div>

          {!isCurrentMonth && (
            <p className="text-center text-red-500 text-sm mt-2">
              Only current month bills can be paid.
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handlePayBill}
            className="bg-white rounded-xl p-6 w-11/12 max-w-md space-y-4 shadow-lg"
          >
            <h2 className="text-xl font-bold text-center">Pay Bill</h2>

            <input
              name="email"
              value={user?.email || ""}
              readOnly
              className="border w-full p-2 rounded"
            />
            <input
              name="billId"
              value={bill._id}
              readOnly
              className="border w-full p-2 rounded"
            />
            <input
              name="amount"
              value={bill.amount}
              readOnly
              className="border w-full p-2 rounded"
            />
            <input
              name="name"
              type="text"
              className="border w-full p-2 rounded"
              placeholder="Enter your name"
              pattern="[A-Za-z.\s]+"
              title="Please enter letters only"
              required
            />
            <input
              name="address"
              placeholder="Enter address"
              required
              className="border w-full p-2 rounded"
            />
            <input
              name="phone"
              placeholder="Enter phone"
              type="number"
              pattern="[0-9]+"
              required
              className="border w-full p-2 rounded"
            />
            <input
              name="date"
              value={new Date().toLocaleDateString("en-GB")}
              readOnly
              className="border w-full p-2 rounded"
            />
            <textarea
              name="additional"
              placeholder="Additional info (optional)"
              className="border w-full p-2 rounded"
            ></textarea>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default BillDetails;
