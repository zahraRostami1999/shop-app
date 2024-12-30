import React from "react";
import TotalPrice from "./TotalPrice";
import { Link } from "react-router-dom";

const ConfirmOrder: React.FC = () => {
  return (
    <div className="lg:text-xl md:text-xl text-base font-Poppins font-semibold flex flex-wrap lg:w-10/12 md:w-10/12 w-1/2 justify-between items-center pb-5 mb-10 border-gray-200 border-2 shadow-md lg:px-5 px-0 py-3 rounded-lg flex-grow">
      <div>
        <TotalPrice />
      </div>
      <div className="lg:w-1/2 md:w-2/3 w-11/12 px-2 flex justify-around mx-auto">
        <Link to="/Checkout">
          <button className="bg-orange-500 hover:scale-105 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold py-3 lg:px-5 md:px-5 px-3 rounded-xl mt-6">
            Proceed to checkout
          </button>
        </Link>
        <Link to="/Products">
          <button className="bg-gray-300 lg:hover:scale-105 hover:bg-gray-400 transition duration-100 ease-in-out text-zinc-900 lg:text-lg md:text-lg text-xs text-center font-bold py-3 lg:px-10 md:px-5 px-3 rounded-xl mt-6">
            Go back to store
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmOrder;