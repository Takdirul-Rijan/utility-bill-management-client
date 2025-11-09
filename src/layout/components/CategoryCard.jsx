import React from "react";
import { useLoaderData } from "react-router";

const CategoryCard = () => {
  const categories = useLoaderData();
  // console.log(categories);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer ${cat.bg}`}
            >
              <img src={cat.image} alt="" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
