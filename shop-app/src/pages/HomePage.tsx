import React from "react";
import cover from "../assets/images/HomePage.png";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import HomeIntro from "../components/HomeIntro";
function HomePage() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-wrap justify-between lg:pt-20 md:pt-24 pt-16 lg:px-10 px-2">
        <div className="w-full mt-10">
          <h1 className="lg:mb-5 mb-2 text-lg font-semibold lg:text-3xl text-center md:text-3xl lg:font-bold md:font-bold text-gray-800">
            Welcome to ChicMarket – Your Shop for Fashion, Electronics, and
            More!
          </h1>
        </div>
        <div className=" h-full w-full">
          <img
            className="bg-cover lg:w-2/3 md:w-5/6 lg:h-5/6 md:h-5/6 w-11/12 mx-auto"
            src={cover}
          />
        </div>
        <div className="w-full font-Poppins lg:pl-10 pl-0 pt-10 text-left">
          <HomeIntro />
          <div className="w-full">
            <Carousel />
          </div>
          <Link to="/Products">
            <div className="w-full lg:w-full md-2/3 lg:my-16 md:my-10 my-10 flex justify-center">
              <button className="bg-gold lg:w-2/5 md:w-2/5 w-5/6 py-3 rounded-lg lg:font-semibold md:font-semibold lg:text-lg md:text-lg text-xs shadow-lg shadow-slate-400 text-black hover:scale-105 transition duration-300">
                See More Products
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
