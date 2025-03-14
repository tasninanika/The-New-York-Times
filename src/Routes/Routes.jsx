import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
