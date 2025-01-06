import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import DisplaycartItems from "./DisplaycartItems";
import ConfirmOrder from "./ConfirmOrder";
import { useGettingProducts } from "../services/Query";

const ShoppingCart = () => {
   const { isLoading: loading } = useGettingProducts();
   return (
      <>
         {loading ? (
            <div className="w-full">
               <Spinner />
            </div>
         ) : (
            <div className="w-full">
               <div className="w-full  my-20">
                  <div className="my-10">
                     <h1 className="w-full my-3 lg:text-2xl md:text-xl sm:text-xl text-lg font-semibold text-center text-neutral-800">Your cart items</h1>
                     <Link to="/Products"><h1 className="w-full lg:text-base md:text-sm sm:text-xs text-xs font-semibold text-center text-rose-600 underline">Back to shopping</h1></Link>
                  </div>
                  <div className="flex justify-center flex-wrap w-full">
                     <DisplaycartItems />
                  </div>
               </div>
               <div className="w-full flex justify-center my-44">
                  <ConfirmOrder />
               </div>
            </div>
         )}
      </>
   );
};

export default ShoppingCart;
