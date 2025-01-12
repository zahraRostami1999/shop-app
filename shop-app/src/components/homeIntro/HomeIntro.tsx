import React from "react";
const HomeIntro: React.FC = () => {
   return (
      <>
         <p className="lg:my-24 md:my-14 my-6  text-neutral-800 px-5 lg:text-center md:text-center text-left">
            <h1 className="lg:my-10 my-3  font-semibold lg:text-2xl md:text-xl sm:text-lg text-base lg:text-center text-left lg:font-bold md:font-bold">
               Welcome to ChicMarket!
            </h1>
            <p className="lg:text-lg md:text-sm sm:text-xs text-xs">
               Discover a world of endless possibilities at ChicMarket, where we bring you the finest selection of products to suit every lifestyle and need. Whether you’re looking for stylish
               apparel, cutting-edge electronics, or timeless jewelry, we’ve got it all under one roof!
            </p>
            <p className="lg:my-10 md:my-14 my-2 lg:text-lg md:text-sm sm:text-xs text-xs">
               At ChicMarket, we’re committed to delivering quality, variety, and convenience. Whether you're shopping for yourself or looking for the perfect gift, we’ve curated something
               extraordinary just for you.
            </p>
            <p className="lg:my-10 md:my-14 my-2 lg:text-lg md:text-sm sm:text-xs text-xs text-neutral-800">Shop with us today and experience the difference!</p>
         </p>
      </>
   );
};

export default HomeIntro;
