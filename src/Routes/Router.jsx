import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Pages/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <SkillDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: <h2>Error</h2>,
  },
]);

export default router;
