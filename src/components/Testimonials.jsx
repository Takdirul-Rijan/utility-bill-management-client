import React from "react";
import reviews from "../../public/reviews.json";

const Testimonials = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-red-200 p-6 rounded-xl shadow">
              <p className="text-gray-700 mb-4">“{review.text}”</p>
              <p className="text-sm font-semibold">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
