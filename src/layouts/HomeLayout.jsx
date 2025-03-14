import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="my-10 mx-auto">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="left col-span-3">Left</aside>
        <section className="col-span-6">main</section>
        <aside className="cols-span-3">right</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
