import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
