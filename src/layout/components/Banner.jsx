import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh] md:h-[90vh]] rounded-lg overflow-hidden shadow-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://assets.jago.com/web-assets/public/blog-202112-bayar-tagihan-internet.jpg"
          className="w-full h-full object-center"
          alt="Internet Bill"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3">
            Stay Connected — Manage Your Internet Bills 🌐
          </h2>
          <p className="max-w-xl text-sm sm:text-base md:text-lg">
            Handle your online service payments with ease and reliability.
          </p>
        </div>
        <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a
            href="#slide4"
            className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://www.cityofnapa.org/ImageRepository/Document?documentId=9483"
          className="w-full h-full object-center"
          alt="Water Bill"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3">
            Pay Your Water Bills in One Click 💧
          </h2>
          <p className="max-w-xl text-sm sm:text-base md:text-lg">
            Manage all your monthly water usage and bills securely online.
          </p>
        </div>
        <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a
            href="#slide1"
            className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://thumbs.dreamstime.com/b/monthly-gas-payment-online-mobile-phone-app-paying-utility-bills-vector-illustration-cartoon-isolated-meter-readings-280339253.jpg"
          className="w-full h-full object-center"
          alt="Gas Bill"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3">
            Track and Pay Your Gas Bills Effortlessly 🔥
          </h2>
          <p className="max-w-xl text-sm sm:text-base md:text-lg">
            Save time by managing all your gas bills from one secure dashboard.
          </p>
        </div>
        <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a
            href="#slide2"
            className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://blog.hitch.zone/wp-content/uploads/2025/03/freepik__expand__77042.png"
          className="w-full h-full object-contain"
          alt="Electricity Bill"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3">
            Manage Your Electricity Bills Easily ⚡
          </h2>
          <p className="max-w-xl text-sm sm:text-base md:text-lg">
            Stay updated, track payments, and never miss a due date again.
          </p>
        </div>
        <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a
            href="#slide3"
            className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-white/60 hover:bg-white text-gray-800 border-none"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
