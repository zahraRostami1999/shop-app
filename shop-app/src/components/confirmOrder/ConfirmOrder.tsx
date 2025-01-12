import React from "react";
import { Link } from "react-router-dom";
import { useTotalPrice } from "../../hooks/useTotalPrice";
import Button from "../button/Button";

interface CartItem {
   id: string;
   qty: number;
   price: number;
}
const ConfirmOrder: React.FC = () => {
   const cartItems: CartItem[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
   const total = useTotalPrice(cartItems);

   return (
      <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 w-full font-Poppins font-semibold flex justify-end items-center">
         <div className="lg:w-1/2 md:w-2/3 sm:w-full w-full flex justify-between flex-wrap">
            <div className="px-3 lg:w-3/5 md:w-2/3 sm:w-full w-full flex justify-center items-center">
               <h1 className="lg:text-base md:text-base sm:text-sm text-sm">Total Price</h1>
               <div className="text-green-700 lg:mx-10 md:mx-10 sm:mx-3 mx-2">€{total}</div>
            </div>
            <div className="px-3 lg:w-1/3 md:w-1/3 sm:w-full w-full flex justify-center ">
               <Link className="" to="/Checkout">
                  <Button label="Ceckout" size="medium" />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ConfirmOrder;
