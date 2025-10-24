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
        <Navbar></Navbar>
      </nav>
      <main className="flex-`grow`">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
