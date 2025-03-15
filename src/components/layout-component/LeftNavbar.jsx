import React, { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold">All Category</h2>
    </div>
  );
};

export default LeftNavbar;
