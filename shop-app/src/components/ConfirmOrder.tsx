import React from "react";
import TotalPrice from "./TotalPrice";
import { Link } from "react-router-dom";
import OrangeBtn from "./Btn/OrangeBtn";
import GrayBtn from "./Btn/GrayBtn";
const ConfirmOrder: React.FC = () => {
  return (
    <div className="lg:w-1/2 md:w-1/2 lg:text-2xl md:text-xl w-full text-base font-Poppins font-semibold flex lg:mx-10 md:mx-7 justify-center items-center pb-5 mb-10 border-gray-200 border-2 shadow-md lg:px-5 px-5 py-3 rounded-lg flex-wrap">
      <div className="sm:w-full w-full text-center px-3">
        <TotalPrice />
      </div>
      <div className="lg:w-full md:w-4/5 sm:w-10/12 w-2/3 px-2 flex justify-center mx-auto py-3">
        <Link className="lg:w-36 lg:h-12 md:w-36 md:h-12 sm:w-24 sm:h-10 w-20 h-8 mx-3" to="/Checkout">
          <OrangeBtn content="Checkout"/>
        </Link>
        <Link className="lg:w-36 lg:h-12 md:w-36 md:h-12 sm:w-24 sm:h-10 w-20 h-8 mx-3" to="/Products">
          <GrayBtn content="Store"/>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmOrder;
