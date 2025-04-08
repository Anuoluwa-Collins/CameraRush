import React from 'react'
import { CheckCircle, Shield, Clock, Star } from "lucide-react";
import image7 from "../assets/image7.png";

const Why = () => {
    const features = [
      {
        icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
        title: "Verified Owners & Listings",
        description:
          "Every listing is vetted for quality and accuracy. Know exactly what you're renting.",
      },
      {
        icon: <Shield className="w-6 h-6 text-blue-500" />,
        title: "Secure Payments & Insurance",
        description:
          "Transactions are protected with SSL encryption and optional rental insurance coverage.",
      },
      {
        icon: <Clock className="w-6 h-6 text-blue-500" />,
        title: "Flexible Rental Durations",
        description:
          "Rent for as short as a day or as long as several weeks. You decide what works for you.",
      },
      {
        icon: <Star className="w-6 h-6 text-blue-500" />,
        title: "Community Ratings & Reviews",
        description:
          "Check detailed reviews from real users before deciding which gear to rent.",
      },
    ];

    const benefits = [
      {
        icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
        text: "Equipment insurance options to protect your rental",
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
        text: "Detailed equipment descriptions and high-quality photos",
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
        text: "Responsive customer support available 7 days a week",
      },
    ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">How it works</h1>
        <p className="text-gray-600 max-w-lg px-2">
          Renting camera gear has never been easier. Follow these simple steps
          to get started.
        </p>
      </div>
      <div className="bg-gray-100 p-6 max-w-6xl mx-auto">
        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 p-2 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Confidence section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Rent with confidence
              </h2>
              <p className="text-gray-600 mb-6">
                Whether you're a professional photographer or an enthusiast,
                CameraRush makes it easy to access premium equipment without the
                hefty price tag of purchasing. Our platform connects you with
                gear owners in your local area, creating a community of creators
                who help each other succeed.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1">{benefit.icon}</div>
                    <p className="text-gray-700">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={image7}
                alt="Person holding camera in forest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why