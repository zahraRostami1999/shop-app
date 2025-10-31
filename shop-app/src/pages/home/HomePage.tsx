import cover from "../../assets/covers/HomePage.webp"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, HomeIntro, Spinner, Button } from "../../components";
import { useGettingProducts } from "../../services/Query";
import Electronic from "../../assets/images/Electronics.webp";
import fashion from "../../assets/images/fashion.webp";
import Jewelery from "../../assets/images/jewelery.webp";

function HomePage() {
   const [coverLoaded, setCoverLoaded] = useState(false);
   const { data: products, isLoading: loading } = useGettingProducts();
   const [imgLoaded1, setImgLoaded1] = useState(false);
   const [imgLoaded2, setImgLoaded2] = useState(false);
   const [imgLoaded3, setImgLoaded3] = useState(false);

   return (
      <div className="w-full min-h-screen flex flex-col">
         {loading && (
            <div className="flex justify-center items-center min-h-screen w-full">
               <Spinner />
            </div>
         )}
         {!loading && (
            <div className="w-full h-full flex flex-wrap justify-between lg:pt-16 md:pt-24 pt-16">
               <div className="w-full h-full">
                  {!coverLoaded && (
                     <div className="w-full sm:h-[177px] md:h-[250px] lg:h-[420px] mx-auto" />
                  )}

                  <img
                     className="bg-cover w-full h-full mx-auto"
                     src={cover}
                     onLoad={() => setCoverLoaded(true)}
                     style={{ display: coverLoaded ? "block" : "none" }}
                     alt="Cover"
                  />
               </div>

               <div className="w-full bg-red-200 pb-5 text-neutral-800 lg:text-base md:text-sm sm:text-sm text-xs text-center">
                  <div className="lg:text-xl text-sm font-medium lg:text-center text-left lg:my-6 mb-3 lg:px-10 md:px-10 sm:px-5 px-5 pt-1">
                     New to ChicMarket?
                  </div>

                  <div className="flex justify-around">
                     <Link to="/Products">
                        <div className="border-2 bg-white rounded-xl lg:px-10 lg:py-10 hover:border-rose-900 transition-all duration-300">
                           {!imgLoaded1 && (
                              <div className="lg:w-40 lg:h-44 md:w-32 md:h-40 sm:w-28 sm:h-32 w-20 h-24" />
                           )}
                           <img
                              className="lg:w-40 lg:h-44 md:w-32 md:h-40 sm:w-28 sm:h-32 w-20 h-24"
                              src={fashion}
                              alt="Fashion"
                              onLoad={() => setImgLoaded1(true)}
                              style={{ display: imgLoaded1 ? "block" : "none" }}
                           />
                           Fashion
                        </div>
                     </Link>

                     <Link to="/Products">
                        <div
                           className="text-center border-2 bg-white rounded-xl lg:px-10 lg:py-10 hover:border-rose-900 transition-all duration-300"
                           onLoad={() => setImgLoaded2(true)}
                           style={{ display: imgLoaded2 ? "block" : "none" }}
                        >
                           {!imgLoaded2 && (
                              <div className="lg:w-40 lg:h-44 md:w-32 md:h-40 sm:w-28 sm:h-32 w-20 h-24" />
                           )}
                           <img
                              className="lg:w-40 lg:h-44 md:w-32 md:h-40 sm:w-28 sm:h-32 w-20 h-24"
                              src={Jewelery}
                              alt="Jewelery"
                           />
                           Jewelery
                        </div>
                     </Link>

                     <Link to="/Products">
                        <div
                           className="text-center border-2 bg-white rounded-xl lg:px-10 lg:py-10 hover:border-rose-900 transition-all duration-300"
                           onLoad={() => setImgLoaded3(true)}
                           style={{ display: imgLoaded3 ? "block" : "none" }}
                        >
                           {!imgLoaded3 && (
                              <div className="lg:w-40 lg:h-44 md:w-32 md:h-40 sm:w-28 sm:h-32 w-20 h-24" />
                           )}
                           <img
                              className="lg:w-40 lg:h-44 md:w-32 md:h-40 sm:w-28 sm:h-32 w-20 h-24"
                              src={Electronic}
                              alt="Electronic"
                           />
                           Electronics
                        </div>
                     </Link>
                  </div>
               </div>

               <div className="w-full font-Poppins text-left">
                  <HomeIntro />
                  <div className="w-full">
                     <div className="w-full flex justify-center my-20 flex-col text-center text-neutral-800">
                        <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-xl font-semibold">
                           Products
                        </h1>
                        <p className="lg:text-base md:text-sm sm:text-xs text-xs">
                           Order it for you or for your beloved ones
                        </p>
                     </div>
                     <Carousel products={products} />
                  </div>

                  <div className="w-full h-24 flex justify-center items-center mx-auto mb-20">
                     <Link to="/Products">
                        <Button label="See More" size="large" />
                     </Link>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default HomePage;
