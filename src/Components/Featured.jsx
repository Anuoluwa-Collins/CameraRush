import React, { useState } from "react";
import { Star } from "lucide-react";
import Canon from "../assets/Canon.png";
import drone from "../assets/drone.jpg";
import Gopro from "../assets/Gopro.png";
import mic from "../assets/mic.png";
import redcam from "../assets/redcam.png";
import Lens from "../assets/Lens.png";


const Featured = () => {
  const categories = [
    { id: "all", name: "All Equipment" },
    { id: "cameras", name: "Cameras" },
    { id: "lenses", name: "Lenses" },
    { id: "drones", name: "Drones" },
    { id: "lighting", name: "Lighting" },
  ];

  const equipmentItems = [
    {
      id: 1,
      name: "Canon EOS R5",
      rating: 4.9,
      owner: "Michael S.",
      price: 160000,
      category: "cameras",
      image:  Canon ,
    },
    {
      id: 2,
      name: "Sony Alpha A7 III",
      rating: 4.8,
      owner: "Emma R.",
      price: 140000,
      category: "cameras",
      image:  redcam ,
    },
    {
      id: 3,
      name: "DJI Mavic 3 Pro",
      rating: 4.8,
      owner: "David R.",
      price: 180000,
      category: "drones",
      image:  drone ,
    },
    {
      id: 4,
      name: "Canon RF 50mm f/1.2",
      rating: 4.8,
      owner: "Sarah D.",
      price: 150000,
      category: "lenses",
      image:  Lens ,
    },
    {
      id: 5,
      name: "Aputure 120D III",
      rating: 4.9,
      owner: "Thomas S.",
      price: 120000,
      category: "lighting",
      image: mic ,
    },
    {
      id: 6,
      name: "GoPro Hero 11 Black",
      rating: 4.8,
      owner: "Jessica R.",
      price: 90000,
      category: "cameras",
      image:  Gopro ,
    },
    {
      id: 7,
      name: "Sony 24-70mm G",
      rating: 4.8,
      owner: "Robert P.",
      price: 130000,
      category: "lenses",
      image:  Lens ,
    },
    {
      id: 8,
      name: "Godox SL-60W LED",
      rating: 4.8,
      owner: "Laura H.",
      price: 85000,
      category: "lighting",
      image:  mic ,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEquipment =
    activeCategory === "all"
      ? equipmentItems
      : equipmentItems.filter((item) => item.category === activeCategory);

  const formatPrice = (price) => {
    return `N${(price / 100).toLocaleString()}/day`;
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center mb-4">
          Featured Equipment
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Browse our selection of top-rated camera gear available for rent.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto space-x-2 mb-8 pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-gray-900 truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm text-gray-700">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-2">by {item.owner}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">
                    {formatPrice(item.price)}
                  </span>
                  <button className="text-sm text-blue-500 border border-blue-500 px-2 py-1 rounded-md hover:bg-blue-50">
                    Ready to rent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
