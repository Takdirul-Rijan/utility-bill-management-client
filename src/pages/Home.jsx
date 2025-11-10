import React from "react";
import Banner from "../components/Banner";
import CategoryCard from "../components/CategoryCard";
import RecentBills from "./RecentBills";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryCard></CategoryCard>
      <RecentBills></RecentBills>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
