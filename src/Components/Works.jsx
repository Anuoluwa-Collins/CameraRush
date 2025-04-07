import React from "react";
import { Search, ShoppingCart, Truck, Star } from "lucide-react";

const Works = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-blue-500" />,
      step: "Step 1",
      title: "Browse & Compare Equipment",
      description:
        "Search through thousands of cameras, lenses, and accessories from local owners and professionals.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />,
      step: "Step 2",
      title: "Order & Pay Securely",
      description:
        "Reserve your gear for your needed dates with our secure payment system and insurance options.",
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-500" />,
      step: "Step 3",
      title: "Pick Up or Get It Delivered",
      description:
        "Choose between convenient local pickup or have the equipment delivered right to your door.",
    },
    {
      icon: <Star className="w-6 h-6 text-blue-500" />,
      step: "Step 4",
      title: "Return & Review",
      description:
        "Return the gear in the same condition and share your experience with the community.",
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col justify-center items-center text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">How it works</h1>
        <p className="text-gray-600 max-w-lg">
          Renting camera gear has never been easier. Follow these simple steps
          to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="bg-blue-100 p-2 rounded-full mb-4">{step.icon}</div>
            <h6 className="bg-blue-100 px-3 py-1 text-blue-500 text-sm font-medium rounded-md mb-3">
              {step.step}
            </h6>
            <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
