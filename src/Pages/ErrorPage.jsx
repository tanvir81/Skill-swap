import React from "react";
import { Link } from "react-router";
import errorImage from "../assets/Error.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#f96c1f] mb-4">
          Oops! You broke the internet... kinda.
        </h1>
        <p className="text-lg text-[#045c90] mb-6">
          This page doesn't exist — but hey, at least you found this cool image.
        </p>
        <img
          src={errorImage}
          alt="Funny error"
          className="max-w-md w-full rounded-lg shadow-lg"
        />
        <Link
          to="/"
          className="mt-8 inline-block bg-[#f96c1f] text-white px-6 py-2 rounded hover:bg-[#045c90] transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
