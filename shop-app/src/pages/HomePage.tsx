import React, { useEffect, useState } from "react";
import cover from "../assets/images/HomePage.png";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import HomeIntro from "../components/HomeIntro";
import { useGettingProducts } from "../services/Query";
import GoldBtn from "../components/Btn/GoldBtn";
import Spinner from "../components/Spinner";

function HomePage() {
  const { data: products, isLoading: loading } = useGettingProducts();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
              <Carousel products={products} />
            </div>
            <div className="w-2/3 lg:w-1/2 lg:my-16 md:my-10 my-10 flex justify-center mx-auto">
              <Link to="/Products" className="w-full">
                <GoldBtn>
                  <h1 className="py-3">See More Products</h1>
                </GoldBtn>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
