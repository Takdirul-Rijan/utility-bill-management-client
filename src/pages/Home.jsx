import React from "react";
import Banner from "../components/Banner";
import CategoryCard from "../components/CategoryCard";
import RecentBills from "./RecentBills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryCard></CategoryCard>
      <RecentBills></RecentBills>
    </div>
  );
};

export default Home;
