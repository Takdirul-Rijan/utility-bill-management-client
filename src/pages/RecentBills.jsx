import React, { useEffect, useState } from "react";
import BillsCard from "../components/BillsCard";
import { PacmanLoader, RiseLoader } from "react-spinners";

const RecentBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://smart-bill-hub-server.vercel.app/bills")
      .then((res) => res.json())
      .then((data) => {
        setBills(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <RiseLoader />
      </div>
    );
  }

  return (
    <div>
      <section className="w-11/12 mx-auto py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
            Recent Bills
          </h2>
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
