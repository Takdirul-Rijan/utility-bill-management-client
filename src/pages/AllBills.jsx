import React, { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import BillsCard from "../components/BillsCard";

const AllBills = () => {
  const [bills, setBills] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Bills";
  }, []);

  useEffect(() => {
    fetch("https://smart-bill-hub-server.vercel.app/all-bills")
      .then((res) => res.json())
      .then((data) => {
        setBills(data);
        setFiltered(data);

        const uniqueCategories = [...new Set(data.map((b) => b.category))];
        setCategories(uniqueCategories);

        setLoading(false);
      });
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFiltered(bills);
      return;
    }

    setLoading(true);
    fetch(
      `https://smart-bill-hub-server.vercel.app/all-bills?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFiltered(data);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <RiseLoader />
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">All Bills</h2>

        <div className="flex justify-center mb-8">
          <select
            value={selectedCategory}
            onChange={(e) => handleFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((bill) => (
            <BillsCard key={bill._id} bill={bill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBills;
