import React from "react";
import { Link } from "react-router-dom";
import { useTotalPrice } from "../hooks/useTotalPrice";
import Button from "./Btn/Button";

interface CartItem {
   id: string;
   qty: number;
   price: number;
}
const ConfirmOrder: React.FC = () => {
   const cartItems: CartItem[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
   const total = useTotalPrice(cartItems);

   return (
      <div className="lg:w-2/3 md:w-2/3 lg:text-2xl md:text-xl w-full text-base font-Poppins font-semibold flex lg:mx-10 md:mx-7 justify-center items-center pb-5 mb-10 border-gray-200 border-2 shadow-md lg:px-5 px-5 py-3 rounded-lg flex-wrap">
         <div className="sm:w-full w-full text-center px-3">
            <h1>
               Your total Price is <span className="text-green-700">€{total}</span>
            </h1>
         </div>
         <div className="lg:w-full md:w-4/5 sm:w-10/12 w-2/3 px-2 flex justify-center mx-auto py-3">
            <Link className="" to="/Checkout">
            <Button label="Ceckout" size="medium"/>
            </Link>
            <Link className="lg:w-36 lg:h-12 md:w-36 md:h-12 sm:w-24 sm:h-10 w-20 h-8 mx-3" to="/Products">
            <Button label="Store" color="neutral" size="medium"/>
            </Link>
         </div>
      </div>
   );
};

export default ConfirmOrder;
