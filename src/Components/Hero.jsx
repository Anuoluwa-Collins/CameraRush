import React from "react";
import bgImage from "../assets/bgImage.png";

const Hero = () => {
  return (
    <div className="relative h-screen">

      <div
        className="absolute inset-0 bg-[url('https://placehold.co/600x400')] bg-cover bg-no-repeat bg-center blur-xl"
        style={{ filter: "blur(8px)", backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative flex flex-col justify-center items-center h-full text-center z-10">
        <h1 className="font-extrabold text-white text-4xl">
          Rent and Lend camera gear with <br /> ease
        </h1>
        <p className="text-white text-lg py-5">
          Affordable rentals, verified owners and secure transactions.
          professional <br /> gear accessible to everyone
        </p>
        <div className="space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100">
            Browse equipment
          </button>
          <button className="bg-transparent text-white px-6 py-2 rounded-md border border-white font-medium hover:bg-white/10">
            List Your gear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
