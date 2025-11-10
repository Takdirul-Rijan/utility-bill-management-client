import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <Navbar></Navbar>

      <main className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
