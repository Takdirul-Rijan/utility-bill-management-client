import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Swal from "sweetalert2";
import { TbCurrencyTaka } from "react-icons/tb";

const MyPayBills = () => {
  const { user } = use(AuthContext);
  const [bills, setBills] = useState([]);
  const [modalBill, setModalBill] = useState(null);

  useEffect(() => {
    const myBills = () => {
      // console.log(user?.email);
      document.title = "My Pay Bills";

      fetch(`http://localhost:3000/my-bills?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setBills(data);
        });
    };

    myBills();
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedBill = {
      amount: form.amount.value,
      address: form.address.value,
      phone: form.phone.value,
      date: form.date.value,
    };
    // console.log(updatedBill);

    fetch(`http://localhost:3000/my-bills/${modalBill._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBill),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Your bill has been updated!");

        setModalBill(null);

        fetch(`http://localhost:3000/my-bills?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log("bills after update:", data);
            setBills(data);
          });
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my-bills/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your bill has been deleted.",
              icon: "success",
            });

            fetch(`http://localhost:3000/my-bills?email=${user.email}`)
              .then((res) => res.json())
              .then((data) => {
                // console.log("after delete bills", data);
                setBills(data);
              });
          });
      }
    });
  };

  const totalAmount = bills.reduce((sum, bill) => sum + Number(bill.amount), 0);
  // console.log(totalAmount);

  // Download PDF report
  const downloadPDF = () => {
    // console.log(bills);
    const doc = new jsPDF();
    doc.text("My Bills Report", 14, 20);

    const tableData = bills.map((b) => [
      b.username,
      b.email,
      b.amount,
      b.address,
      b.phone,
      b.date,
    ]);

    autoTable(doc, {
      head: [["Username", "Email", "Amount(taka)", "Address", "Phone", "Date"]],
      body: tableData,
      startY: 30,
    });

    doc.save("MyBills.pdf");
  };

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">My Pay Bills</h2>
      <p className="mb-4">
        Total Bills: {bills.length}
        <span className="flex items-center">
          Total Amount: <TbCurrencyTaka />
          {totalAmount}
        </span>
      </p>

      <button
        onClick={downloadPDF}
        className="mb-4 px-4 py-2 bg-blue-600 hover:bg-amber-600 text-white rounded"
      >
        Download Report
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Username</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((b) => (
              <tr key={b._id}>
                <td className="border p-2">{b.username}</td>
                <td className="border p-2">{b.email}</td>
                <td className="border p-2 ">
                  <span className="flex items-center">
                    <TbCurrencyTaka />
                    {b.amount}
                  </span>
                </td>
                <td className="border p-2">{b.address}</td>
                <td className="border p-2">{b.phone}</td>
                <td className="border p-2">{b.date}</td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => setModalBill(b)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {modalBill && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded w-96 space-y-4"
          >
            <h3 className="text-xl font-bold">Update Bill</h3>
            <input
              name="amount"
              defaultValue={modalBill.amount}
              type="number"
              pattern="[0-9]+"
              placeholder="Amount"
              className="border p-2 w-full"
              required
            />
            <input
              name="address"
              defaultValue={modalBill.address}
              placeholder="Address"
              className="border p-2 w-full"
              required
            />
            <input
              name="phone"
              defaultValue={modalBill.phone}
              placeholder="Phone"
              type="number"
              pattern="[0-9]+"
              className="border p-2 w-full"
              required
            />
            <input
              name="date"
              defaultValue={modalBill.date}
              placeholder="Date"
              className="border p-2 w-full"
              required
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setModalBill(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyPayBills;
