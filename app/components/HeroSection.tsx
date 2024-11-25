"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function HeroSection() {
  const sliderImages = [
    "/assets/images/slider1.jpg",
    "/assets/images/slider2.jpg",
    "/assets/images/slider3.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="relative w-full">
      <Slider {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-sm sm:text-base lg:text-lg">The Best Look</h1>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
          Anytime Anywhere
        </h1>
        <h1 className="text-sm sm:text-base lg:text-lg">
          Start from 10,000 MMK
        </h1>
        <Link href={"/"}>
          <button className="mt-4 bg-gray-500 bg-opacity-60 rounded-3xl px-6 py-2 text-sm sm:text-base lg:text-lg hover:bg-opacity-80 transition">
            View
          </button>
        </Link>
      </div>
    </section>
  );
}
