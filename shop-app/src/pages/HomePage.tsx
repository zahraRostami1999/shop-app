import cover from "../assets/images/HomePage.jpg";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import HomeIntro from "../components/HomeIntro";
import { useGettingProducts } from "../services/Query";
import Spinner from "../components/Spinner";
import Button from "../components/Btn/Button";
import Electronic from "../assets/images/Electronics.png";
import fashion from "../assets/images/fashion.png";
import Jewelery from "../assets/images/jewelery.png";

function HomePage() {
   const { data: products, isLoading: loading } = useGettingProducts();

   return (
      <>
         {loading ? (
            <Spinner />
         ) : (
            <div className=" w-full h-full flex flex-wrap justify-between lg:pt-16 md:pt-24 pt-16 ">
               <div className=" w-full h-full">
                  <img className="bg-cover w-full h-full mx-auto" src={cover} />
               </div>
               <div className="w-full bg-red-200 pb-5 text-neutral-800 lg:text-base md:text-sm sm:text-sm text-xs text-center">
                  <div className="lg:text-xl text-sm font-medium lg:text-center text-left lg:my-6 mb-3 lg:px-10 md:px-10 sm:px-5 px-5 pt-1">New to ChicMarket?</div>
                  <div className="flex justify-around">
                     <Link to="/Products">
                        <div className="border-2 bg-white rounded lg:px-10 lg:py-10 hover:border-rose-900">
                           <img className="lg:w-40 lg:h-44 md:w-32 md:h-40 sm:w-28 sm:h-32 w-20 h-24" src={fashion} alt="" />
                           Fashion
                        </div>
                     </Link>
                     <Link to="/Products">
                        <div className="text-center border-2 bg-white rounded lg:px-10 lg:py-10 hover:border-rose-900">
                           <img className="lg:w-40 lg:h-44 md:w-32 md:h-40 sm:w-28 sm:h-32 w-20 h-24" src={Jewelery} alt="" />
                           Jewelery
                        </div>
                     </Link>
                     <Link to="/Products">
                        <div className="text-center border-2 bg-white rounded lg:px-10 lg:py-10 hover:border-rose-900">
                           <img className="lg:w-40 lg:h-44 md:w-32 md:h-40 sm:w-28 sm:h-32 w-20 h-24" src={Electronic} alt="" />
                           Electronics
                        </div>
                     </Link>
                  </div>
               </div>
               <div className="w-full font-Poppins text-left ">
                  <HomeIntro />

                  <div className="w-full">
                     <div className="w-full flex justify-center my-20 flex-col text-center text-neutral-800">
                        <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-xl font-semibold">Products</h1>
                        <p className="lg:text-base md:text-sm sm:text-xs text-xs">Order it for you or for your beloved ones </p>
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
      </>
   );
}

export default HomePage;
