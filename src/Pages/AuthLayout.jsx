import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-full mx-auto py-5">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
