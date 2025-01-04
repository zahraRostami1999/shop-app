import React from "react";
const HomeIntro: React.FC = () => {
   return (
      <>
         <p className="lg:my-32 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold text-neutral-800 px-10 lg:text-center md:text-center text-left">
            <h1 className="lg:my-10 my-10 text-xl font-semibold lg:text-3xl lg:text-center text-left md:text-3xl lg:font-bold md:font-bold">
               Welcome to ChicMarket – Your Shop for Fashion, Electronics, and More!
            </h1>
            <p>
               Discover a world of endless possibilities at ChicMarket, where we bring you the finest selection of products to suit every lifestyle and need. Whether you’re looking for stylish
               apparel, cutting-edge electronics, or timeless jewelry, we’ve got it all under one roof!
            </p>
            <p className="lg:my-10 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold">
               At ChicMarket, we’re committed to delivering quality, variety, and convenience. Whether you're shopping for yourself or looking for the perfect gift, we’ve curated something
               extraordinary just for you.
            </p>
            <p className="lg:my-10 md:my-14 my-2 lg:text-xl md:text-xl text-xs font-semibold text-neutral-800">Shop with us today and experience the difference!</p>
         </p>
      </>
   );
};

export default HomeIntro;
