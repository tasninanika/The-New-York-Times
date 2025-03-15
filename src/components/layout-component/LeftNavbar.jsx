import React, { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold">All Category{categories.length}</h2>
      <div>
        {categories.map((category) => {
          <button></button>;
        })}
      </div>
    </div>
  );
};

export default LeftNavbar;
