import React from "react";
import { Link } from "react-router-dom";
import { AddToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ id, title, price, image }) {
  const dispatch = useDispatch();

  const handleAddBtn = () => {
    dispatch(AddToCart({ id, price }));
    toast(`You've added ${title} to your cart.`);
  };

  return (
    <>
      <div className="px-1 overflow-hidden lg:mx-5 mt-10 mx-3 rounded-2xl hover:border-zinc-300 hover:shadow-gray-900 hover:shadow-2xl transition duration-500 ease-in-out">
        <Link to={`/${id}`}>
          <div className="relative lg:w-44 lg:h-52 md:w-36 md:h-44 sm:w-40 sm:h-48 w-32 h-40 mx-auto mt-3">
            <img
              className="inset-0 h-full w-full rounded-t-2xl "
              src={image}
              alt={title}
            />
          </div>
        </Link>
        <div className="px-5 lg:px-3 md:px-3 break-words whitespace-normal ">
          <h2 className="lg:h-28 flex flex-wrap md:h-32  text-zinc-800 text-xs sm:text-sm lg:text-base md:text-sm font-Poppins pt-3 font-bold">
            {title}
          </h2>
          <p className="font-bold flex text-sm text-zinc-900 justify-between items-center pb-3 sm:pb-5 lg:pb-8 md:pb-7">
            <span className="text-green-700">€{price}</span>
            <button
              onClick={handleAddBtn}
              className="ml-auto bg-gold px-2 py-2 rounded text-neutral-900 hover:scale-x-105 lg:text-sm md:text-sm sm:text-xs text-xs font-semibold"
            >
              Add to Cart
            </button>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Card;
