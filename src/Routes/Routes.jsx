import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"category/01"}></Navigate>,
      },
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <div>News</div>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <h2>Login</h2>,
      },
      {
        path: "/auth/register",
        element: <h2>Register</h2>,
      },
    ],
  },
  {
    path: "register",
    element: <div>Register</div>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default routes;
