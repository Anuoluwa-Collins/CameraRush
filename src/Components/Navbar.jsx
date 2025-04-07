import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50  ">
      <div className="absolute inset-0 bg-white/30 backdrop-filter backdrop-blur-md"></div>

      <div className="relative flex justify-between items-center p-5 h-16">
        <h1 className="text-blue-500 font-semibold text-lg">CameraRush</h1>
        <ol className="hidden md:flex gap-5 text-black">
          <li className="cursor-pointer hover:text-blue-500 transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition-colors">
            Browse Gear
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition-colors">
            How it Works
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition-colors">
            About Us
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition-colors">
            Contact
          </li>
        </ol>
        <button className="bg-blue-700 hover:bg-blue-800 transition-colors cursor-pointer p-2 px-4 rounded-3xl text-white">
          <Link to="/signup" className="text-white no-underline">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
