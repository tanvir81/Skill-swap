import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="flex-grow">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
