import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

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
        element: <h2>This is category</h2>,
      },
    ],
  },
  {
    path: "news",
    element: <div>News</div>,
  },
  {
    path: "login",
    element: <div>Login</div>,
  },
  {
    path: "register",
    element: <div>Register</div>,
  },
]);

export default routes;
