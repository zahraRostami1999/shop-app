import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductDetails } from "../services/Query";
import Spinner from "../components/Spinner";
import Button from "../components/Btn/Button";

const ProductPage: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const { data: productDetails, isLoading: loading } = useProductDetails(id);
   const dispatch = useDispatch();

   const handleAddToBasket = (id: string | undefined) => {
      if (id && productDetails) {
         dispatch(AddToCart({ id, price: productDetails.price }));
         toast.success(`You've added ${productDetails?.title} to your cart.`, {
            position: "bottom-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      }
   };

   return (
      <>
         {loading ? (
            <Spinner />
         ) : (
            <div className="w-full min-h-screen flex items-center">
               <div className="h-full mx-auto mt-10 py-5 flex flex-col lg:flex-row justify-center lg:justify-around my-28 sm:my-20 md:my-20">
                  <div className="w-24 h-32 sm:w-32 sm:h-44 md:w-32 md:h-44 lg:w-44 lg:h-40 mx-auto ">
                     <img src={productDetails?.image} alt={productDetails?.title} className="w-full object-cover" />
                  </div>
                  <div className="lg:mx-20 md:mx-0 md:px-20 sm:px-20 mx-1 w-full lg:w-3/5 h-auto flex flex-col justify-between px-7 lg:px-0  my-7 sm:my-10 md:my-20 lg:my-5">
                     <div>
                        <h1 className="lg:text-3xl md:text-xl sm:text-lg text-base font-semibold lg:pb-3 md:pb-3 pb-1">{productDetails?.title}</h1>
                        <h3 className="h-1/2 lg:text-xl md:text-sm text-xs sm:text-sm lg:mt-14 md:mt-16 my-5">{productDetails?.description}</h3>
                     </div>
                     <div className="w-full h-20 flex flex-row lg:flex-row justify-around items-center lg:mt-10 mt-5">
                        <h2 className="lg:text-base md:text-sm sm:text-sm text-xs font-bold text-green-700">€{productDetails?.price}</h2>
                        <div>
                           <Button label="Add to Basket" size="medium" onClick={() => handleAddToBasket(id)} />
                        </div>
                        <div>
                           <Link to="/Products">
                              <Button label="Back to Store" color="neutral" size="medium" />
                           </Link>
                        </div>
                     </div>
                  </div>
                  <ToastContainer />
               </div>
            </div>
         )}
      </>
   );
};

export default ProductPage;
