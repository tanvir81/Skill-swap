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
import ErrorPage from "../Pages/ErrorPage";
import ContactInfo from "../Pages/ContactInfo";
import Trams from "../Pages/Trams";
import AllItems from "../Pages/AllItems";
import AboutUs from "../Pages/AboutUs";
import Support from "../Pages/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "details/:id",
        element: <SkillDetails />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/allitems",
        element: <AllItems></AllItems>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },

      {
        path: "/contact",
        element: <ContactInfo />,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/privacy",
        element: <Trams />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
]);

export default router;
