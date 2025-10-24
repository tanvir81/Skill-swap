import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import ScrollingHeadline from "../Components/ScrollingHeadline";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollingHeadline />

      <nav>
        <Navbar />
        {/* {import.meta.env.VITE_name} */}
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
