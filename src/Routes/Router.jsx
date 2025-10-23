import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Pages/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../Pages/ForgotPassword";
import MyProfile from "../Pages/MyProfile";

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
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
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
      { path: "forgot-password", element: <ForgotPassword /> },
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
