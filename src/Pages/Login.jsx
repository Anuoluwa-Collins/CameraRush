import React from "react";
import Image7 from "../assets/Image7.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mx-auto p-4 md:p-5 min-h-screen w-full">
      {/* Image section - hidden on mobile, visible on medium screens and up */}
      <div className="hidden h-full  md:block md:w-1/2">
        <img
          src={Image7}
          alt="Login illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Form section - full width on mobile, half width on medium screens and up */}
      <div className="flex flex-col w-full md:w-1/2 gap-3 justify-center">
        <h1 className="text-center font-bold text-3xl md:text-5xl p-2 md:p-3">
          Welcome back
        </h1>
        <p className="text-center font-normal text-lg md:text-2xl p-2 md:p-3 text-gray-700">
          Login to access your account
        </p>

        <div className="w-full max-w-md mx-auto">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="John Doe"
            className="border border-blue-700 p-3 rounded-lg w-full"
          />

          <div className="flex justify-between mt-3 mb-1">
            <label htmlFor="password">Password</label>
            <span className="text-blue-700 cursor-pointer hover:text-blue-950 hover:underline">
              Forgot Password?
            </span>
          </div>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            className="border border-blue-700 p-3 rounded-lg w-full"
          />

          <div className="mt-2">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className="flex items-center w-full my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="px-4 text-sm text-gray-500">Or continue with</div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex gap-2 w-full">
            <div className="border border-blue-700 p-2 rounded-lg text-blue-700 w-1/2 text-center capitalize hover:bg-blue-950 hover:text-white hover:border-none cursor-pointer">
              google
            </div>
            <div className="border border-blue-700 p-2 rounded-lg text-blue-700 w-1/2 text-center capitalize hover:bg-blue-950 hover:text-white hover:border-none cursor-pointer">
              facebook
            </div>
          </div>

          <button className="bg-blue-700 p-3 text-white rounded w-full mt-4 hover:bg-blue-950 hover:text-white hover:border-none cursor-pointer">
            Create Account
          </button>

          <p className="py-3 text-center">
            Don't have an account?
            <Link to="/signup" className="text-blue-700 px-1 capitalize">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
