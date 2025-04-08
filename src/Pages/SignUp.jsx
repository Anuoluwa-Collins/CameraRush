import React from "react";
import Image6 from "@/assets/Image6.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full gap-5 p-4 justify-center items-center">
      {/* Image section - hidden on mobile, visible on medium screens and up */}
      <div className="hidden md:block h-full md:w-1/2 lg:w-2/5">
        <img
          src={Image6}
          alt="Sign up illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Form section - full width on mobile, half width on medium screens and up */}
      <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 max-w-md mx-auto">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl p-2 md:p-3">
          Create Account
        </h1>
        <p className="text-center font-normal text-lg md:text-xl lg:text-2xl p-2 md:p-3 text-gray-700">
          Join our community of photography and gear enthusiasts
        </p>

        <div className="flex gap-2 w-full">
          <div className="border border-blue-700 p-2 rounded-lg text-blue-700 w-1/2 text-center capitalize hover:bg-blue-950 hover:text-white hover:border-none cursor-pointer">
            google
          </div>
          <div className="border border-blue-700 p-2 rounded-lg text-blue-700 w-1/2 text-center capitalize hover:bg-blue-950 hover:text-white hover:border-none cursor-pointer">
            facebook
          </div>
        </div>

        <div className="flex items-center w-full my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="px-4 text-sm text-gray-500">Or continue with</div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
            className="border border-blue-700 p-3 rounded-lg w-full"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="JohnDoe@something.com"
            className="border border-blue-700 p-3 rounded-lg w-full"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            className="border border-blue-700 p-3 rounded-lg w-full"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="**********"
            className="border border-blue-700 p-3 rounded-lg w-full"
          />

          <label htmlFor="userType">I am a</label>
          <select
            name="userType"
            id="userType"
            className="border border-blue-700 p-3 rounded-lg w-full"
          >
            <option value="renter">Renter</option>
            <option value="lender">Lender</option>
            <option value="both">Both</option>
          </select>

          <div className="py-2">
            <input type="checkbox" name="terms" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm sm:text-base">
              I agree to{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service{" "}
              </a>
              and
              <a href="#" className="text-blue-600 hover:underline">
                {" "}
                Privacy Policy
              </a>
            </label>
          </div>

          <button className="bg-blue-700 p-3 text-white rounded hover:bg-blue-950 hover:text-white hover:border-none cursor-pointer mt-2">
            Create Account
          </button>

          <p className="py-2 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-700 capitalize hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
