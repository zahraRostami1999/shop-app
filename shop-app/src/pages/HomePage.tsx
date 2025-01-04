import cover from "../assets/images/HomePage.jpeg";
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
            <div className=" w-full flex flex-wrap justify-between lg:pt-16 md:pt-24 pt-16">
               <div className=" h-full w-full mb-14">
                  <img className="bg-cover w-full mx-auto" src={cover} />
               </div>
               <div className="w-full font-Poppins text-left">
                  <HomeIntro />
                  <div className="w-full">
                    <div className="w-full flex justify-center my-20 flex-col text-center text-neutral-800">
                      <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-xl font-semibold">Products</h1>
                      <p className="lg:text-base md:text-sm sm:text-xs text-xs">Order it for you or for your beloved ones </p>
                    </div>
                     <Carousel products={products} />
                  </div>
                  <div className="w-1/2 lg:w-1/3 lg:my-16 md:my-10 my-10 flex justify-center mx-auto">
                     <Link to="/Products" className="w-full">
                        <GoldBtn>
                           <h1 className="py-3">See More</h1>
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
