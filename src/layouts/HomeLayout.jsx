import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="my-10 mx-auto">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
    </div>
  );
};

export default HomeLayout;
