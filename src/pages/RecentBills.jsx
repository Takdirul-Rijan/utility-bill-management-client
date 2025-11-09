import React, { useEffect, useState } from "react";
import BillsCard from "../components/BillsCard";

const RecentBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/bills")
      .then((res) => res.json())
      .then((data) => {
        setBills(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <span className="text-center py-10 loading loading-ball loading-xl"></span>
    );
  }
  return (
    <div>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Bills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bills.map((bill) => (
              <BillsCard key={bill._id} bill={bill}></BillsCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentBills;
