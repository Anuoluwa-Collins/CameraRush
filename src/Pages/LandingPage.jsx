import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Works from "../Components/Works"
import Faq from "../Components/Faq";
import ReviewCarousel from "../Components/ReviewCarousel"
import Why from "../Components/Why";
import Featured from "../Components/Featured";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-4">
        <Navbar />
      <Hero />
      <Works />
      <Featured />
      <Why/>
      <ReviewCarousel/>
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
