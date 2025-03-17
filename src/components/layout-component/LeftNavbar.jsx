import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftSports from "../LeftSports";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/04")
      .then((res) => res.json())
      .then((data) => setSports(data.data));
  }, []);

  return (
    <div>
      <h2 className="text-[20px] font-semibold mb-5">All Category</h2>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className="btn border-none bg-white shadow-none py-6 text-[#9F9F9F] flex items-center justify-start pl-10 hover:bg-base-300"
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
      <div>
        {sports.map((sport) => (
          <LeftSports key={sport._id} sport={sport}></LeftSports>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
