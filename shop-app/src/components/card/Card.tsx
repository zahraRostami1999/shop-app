import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AddToCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../index";

interface Item {
   id: string;
   title: string;
   price: number;
   image: string;
}

const Card: React.FC<Item> = ({ id, title, price, image }) => {
   const [imgLoaded, setImgLoaded] = useState(false);

   const dispatch = useDispatch();

   const handleAddBtn = () => {
      dispatch(AddToCart({ id, price }));
      toast.success(`You've added ${title} to your cart.`, {
         position: "bottom-left",
         autoClose: 1500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
   };

   const truncateTitle = (text: string, maxLength: number = 50) => {
      return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
   };

   return (
      <>
         <div className="px-1 mx-4 overflow-hidden lg:mx-5 mt-10 rounded-xl hover:border-zinc-300 hover:shadow-gray-900 hover:shadow-2xl transition duration-500 ease-in-out">
            <Link to={`/product/${id}`}>
               <div className="relative lg:w-32 lg:h-40 md:w-28 md:h-42 sm:w-24 sm:h-32 w-20 h-28 mx-auto mt-3">
                  {!imgLoaded && <div className="lg:w-32 lg:h-40 md:w-28 md:h-42 sm:w-24 sm:h-32 w-20 h-28" />}
                  <img className="inset-0 h-full w-full " src={image} alt={title} onLoad={() => setImgLoaded(true)} style={{ display: imgLoaded ? "block" : "none" }} />
               </div>
            </Link>
            <div className="pl-2 lg:px-3 md:px-3 break-words whitespace-normal">
               <h2
                  className="lg:h-20 flex flex-wrap justify-center lg:items-start md:items-start sm:items-start items-center md:h-24 sm:h-20 h-20 text-zinc-700 
                  text-[12px] sm:text-xs lg:text-[13px] md:text-[13px] font-Poppins pt-3 lg:font-semibold md:font-semibold sm:font-medium font-medium"
               >
                  {truncateTitle(title, 60)}
               </h2>
               <p className="font-bold flex lg:text-sm md:text-sm sm:text-[11px] text-[12px] text-zinc-900 justify-around sm:justify-around lg:justify-between items-center pb-3 sm:pb-5 lg:pb-8 md:pb-7">
                  <span className="text-green-700 sm:font-bold font-bold">€{price}</span>
                  <Button label="Add to Cart" onClick={handleAddBtn} />
               </p>
               <ToastContainer />
            </div>
         </div>
      </>
   );
};

export default Card;
