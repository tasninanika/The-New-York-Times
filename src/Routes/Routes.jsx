import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
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
