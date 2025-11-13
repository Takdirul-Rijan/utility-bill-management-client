import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const slides = [
    {
      id: "slide1",
      img: "https://assets.jago.com/web-assets/public/blog-202112-bayar-tagihan-internet.jpg",
      words: [
        "Stay Connected — Manage Your Internet Bills 🌐",
        "Pay Your Bills Effortlessly 💻",
        "Track Your Utilities Anytime ⚡",
      ],
      paragraph:
        "Handle your online service payments with ease and reliability.",
      prev: "slide4",
      next: "slide2",
    },
    {
      id: "slide2",
      img: "https://www.cityofnapa.org/ImageRepository/Document?documentId=9483",
      words: [
        "Pay Your Water Bills in One Click 💧",
        "Track Your Water Usage 💦",
        "Secure & Fast Water Bill Payments 🚰",
      ],
      paragraph:
        "Manage all your monthly water usage and bills securely online.",
      prev: "slide1",
      next: "slide3",
    },
    {
      id: "slide3",
      img: "https://cdni.iconscout.com/illustration/premium/thumb/payment-of-gas-bill-online-illustration-svg-download-png-9404797.png",
      words: [
        "Track and Pay Your Gas Bills Effortlessly 🔥",
        "No More Gas Bill Hassle ⛽",
        "Monitor Your Gas Usage Anytime 🏠",
      ],
      paragraph:
        "Save time by managing all your gas bills from one secure dashboard.",
      prev: "slide2",
      next: "slide4",
    },
    {
      id: "slide4",
      img: "https://www.originenergy.com.au/blog/wp-content/uploads/10-easy-ways-to-reduce-your-energy-bill-Blog-banner-1600x900-1-scaled.jpg",
      words: [
        "Manage Your Electricity Bills Easily ⚡",
        "Stay Updated on Your Power Usage 🔌",
        "Never Miss a Due Date Again 🕒",
      ],
      paragraph:
        "Stay updated, track payments, and never miss a due date again.",
      prev: "slide3",
      next: "slide1",
    },
  ];

  return (
    <div className="carousel w-full h-[80vh] md:h-[90vh] rounded-lg overflow-hidden shadow-lg">
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.img}
            className="w-full h-full object-center"
            alt={slide.id}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3">
              <Typewriter
                words={slide.words}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>
            <p className="max-w-xl text-sm sm:text-base md:text-lg">
              {slide.paragraph}
            </p>
          </div>
          <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a
              href={`#${slide.prev}`}
              className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
            >
              <IoIosArrowBack size={24}></IoIosArrowBack>
            </a>
            <a
              href={`#${slide.next}`}
              className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
            >
              <IoIosArrowForward size={24}></IoIosArrowForward>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
