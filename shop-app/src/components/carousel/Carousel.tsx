//Carousel: input: list output: carousel of list items with filter applied option
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

interface IProduct {
   id: string;
   title: string;
   price: number;
   image: string;
}

interface Products {
   products: IProduct[] | undefined;
}

const Carousel: React.FC<Products> = ({ products }) => {
   const [imgLoaded, setImgLoaded] = useState(false);
   const filterproducts = products?.filter((product) => parseInt(product.id) > 14 && parseInt(product.id) < 21);

   const responsive = {
      300: { items: 2 },
      400: { items: 3 },
      1024: { items: 4 },
   };

   const items = filterproducts?.map((item) => {
      return (
         <Link key={item.id} to={`/product/${item.id}`}>
            <div className="mx-2 lg:p-4 mb-5 flex flex-col items-center rounded-lg shadow-md hover:border-zinc-800 hover:shadow-gray-400 hover:shadow-xl transition duration-500 ease-in-out">
               <div className="w-20 h-24 sm:w-28 sm:h-32 md:w-32 md:h-40 flex justify-center items-center">
                  {!imgLoaded && <div className="w-20 h-24 sm:w-28 sm:h-32 md:w-32 md:h-40" />}
                  <img className="h-full max-w-full object-contain" src={item.image} alt={item.title} onLoad={() => setImgLoaded(true)} style={{ display: imgLoaded ? "block" : "none" }} />
               </div>
               <h1 className="block text-center h-12 lg:h-20 text-xs md:text-sm lg:text-base xl:text-lg font-medium mt-2 line-clamp-2">{item.title}</h1>
               <p className="block text-center text-green-700 font-semibold mt-1 text-xs md:text-sm lg:text-base lg:pb-5 md:pb-5 sm:pb-3 pb-3">$ {item.price}</p>
            </div>
         </Link>
      );
   });

   return (
      <>
         <div className="lg:mt-10 md:mt-10 mt-16 mb-10 w-5/6 mx-auto">
            <div className="">
               <AliceCarousel mouseTracking infinite autoPlayInterval={2000} animationDuration={1500} disableDotsControls disableButtonsControls responsive={responsive} autoPlay items={items} />
            </div>
         </div>
      </>
   );
};

export default Carousel;
