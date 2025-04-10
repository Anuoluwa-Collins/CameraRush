import React from "react";
import Carousel from "react-bootstrap/Carousel";
import fc1 from "../assets/fc1.png";

function ReviewCarousel() {
  return (
    <div className=" flex flex-col justify-between h-screen items-center p-8">
      <div className="flex flex-col justify-center items-center text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          What Our Users Say
        </h1>
        <p className="text-gray-600 max-w-lg px-2">
          Discover how CameraRush is helping photographers and videographers
          around the world.
        </p>
      </div>

      <Carousel data-bs-theme="dark" className="w-full">
        <Carousel.Item interval={1000}>
          <div className="flex flex-col items-center justify-center p-8 mb-4">
            <img className="d-block mb-4" src={fc1} alt="First slide" />
            <Carousel.Caption className="position-static p-0 text-center text-black">
              <p>
                "As a freelance videographer, I love the flexibility CameraRush
                provides. I've rented everything from basic lenses to high-end
                cinema cameras. The community is supportive, and I've even made
                some great industry connections."
              </p>
              <h3>Sophia Chen</h3>
              <h6>Videographer</h6>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <div className="flex flex-col items-center justify-center p-4 mb-4">
            <img className="d-block mb-4" src={fc1} alt="Second slide" />
            <Carousel.Caption className="position-static p-0 text-center text-black">
              <p>
                "CameraRush has been invaluable for my photography education. I
                can experiment with different equipment before deciding what to
                invest in. The platform is intuitive, and the owners are always
                helpful with tips."
              </p>
              <h3>Marcus Williams</h3>
              <h6>Photography Student</h6>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="flex flex-col items-center justify-center p-4 mb-4">
            <img className="d-block mb-4" src={fc1} alt="Third slide" />
            <Carousel.Caption className="position-static p-0 text-center text-black">
              <p>
                "CameraRush has been a game-changer for my business. I can now
                access high-end equipment for specific shoots without the
                massive investment. The process is smooth, and the gear is
                always in great condition."
              </p>
              <h3>Alex Thompson</h3>
              <h6>Wedding Photographer</h6>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ReviewCarousel;
