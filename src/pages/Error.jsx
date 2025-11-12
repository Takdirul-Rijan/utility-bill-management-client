import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Error - 404";
  }, []);
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-all duration-300 px-6 text-center">
      <h1 className="text-9xl font-extrabold text-pink-500 dark:text-pink-400 animate-bounce">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6 max-w-md">
        Oops! The page you are looking for does not exist or has been removed.
        Let's get you back home.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
      >
        Back to Home
      </button>
    </section>
  );
};

export default Error;
