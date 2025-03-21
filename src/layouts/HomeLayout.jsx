import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="my-10 mx-auto">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto my-9">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="left col-span-2">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-8">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-2">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
