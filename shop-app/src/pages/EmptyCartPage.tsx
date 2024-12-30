import React from "react";
import { Link } from "react-router-dom";
import cover from "../assets/images/Empty.png";

function EmptyCartPage() {
  return (
    <>
      <div className="lg:w-2/5 md:w-3/5 w-11/12 min-h-screen mt-5 font-Poppins flex flex-wrap justify-center items-center">
        <div>
          <div className="relative">
            <img
              src={cover}
              alt="Empty menu illustration"
              className="mx-auto mt-10 mb-6 w-full h-1/2 rounded-md"
            />
          </div>
          <div>
            <h1 className="text-zinc-800 text-center font-bold lg:text-4xl md:text-3xl text-2xl">
              Your Cart is Empty!
            </h1>
            <h2 className="text-zinc-700 text-md lg:text-2xl md:text-2xl text-center my-2">
              Let's see the new collection.
            </h2>
          </div>
          <Link className=" w-full flex justify-center" to="/Products">
            <button className="bg-orange-500 hover:scale-105 transition duration-100 ease-in-out text-zinc-900 lg:text-xl md:lg:text-xl text-lg text-center font-bold py-3 px-10 rounded-xl mt-6">
              Let's Go
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyCartPage;
