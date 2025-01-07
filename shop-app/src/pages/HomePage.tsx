import cover from "../assets/images/HomePage.jpg";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import HomeIntro from "../components/HomeIntro";
import { useGettingProducts } from "../services/Query";
import Spinner from "../components/Spinner";
import Button from "../components/Btn/Button";
import Electronic from "../assets/images/Electronic.jpeg";
import Men from "../assets/images/Men.jpeg";
import Women from "../assets/images/Women.jpeg";
import Jewelery from "../assets/images/jewelery.jpeg";

function HomePage() {
   const { data: products, isLoading: loading } = useGettingProducts();

   return (
      <>
         {loading ? (
            <Spinner />
         ) : (
            <div className=" w-full h-full flex flex-wrap justify-between lg:pt-16 md:pt-24 pt-16 ">
               <div className=" w-full ">
                  <img className="bg-cover w-full mx-auto" src={cover} />
               </div>
               <div className="w-full my-20 bg-neutralLight py-10">
                  <div className="lg:text-2xl mb-10 mx-10">New to ChicMarket?</div>
                  <div className="flex justify-around">
                     <div className="text-center border-2 border-neutral-600 rounded px-10 py-10">
                        Fashion
                        <img className="w-44 h-40" src={Men} alt="" />
                     </div>
                     <div className="text-center border-2 border-neutral-600 rounded px-10 py-10">
                        Jewelery
                        <img className="w-44 h-40 " src={Jewelery} alt="" />
                     </div>
                     <div className="text-center border-2 border-neutral-600 rounded px-10 py-10">
                        Electronics
                        <img className="w-44 h-40 " src={Electronic} alt="" />
                     </div>
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
