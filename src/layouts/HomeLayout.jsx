import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <header>
      <Header></Header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
    </header>
  );
};

export default HomeLayout;
