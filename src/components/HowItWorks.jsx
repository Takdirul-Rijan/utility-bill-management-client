import React from "react";

import steps from "../../public/steps.json";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.title}
              className="bg-gradient-to-br from-green-50 to-teal-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl font-bold rounded-full mb-5">
                {steps.indexOf(s) + 1}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
