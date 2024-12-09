import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../services/api";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductPage() {
  const Params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const dispatch = useDispatch();

  const handleAddToBasket = (id) => {
    dispatch(AddToCart(id));

    toast.success(`You've added ${productDetails.title} to your cart.`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      theme: "light",
      transition: "bounce",
      closeOnClick: true,
      draggable: true,
    });
  };

  useEffect(() => {
    getProductDetails(Params.id).then((result) => {
      setProductDetails(result);
    });
  }, [Params.id]);

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="h-full mx-auto mt-20 py-5 flex flex-col lg:flex-row justify-center lg:justify-around">
          <div className="">
            <ToastContainer 
            autoClose={1000}
            closeOnClick
            />
          </div>
          <div className="lg:w-2/5 md:w-2/5 w-2/5 h-1/3 lg:h-auto mx-auto">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="w-full object-cover"
            />
          </div>
          <div className="lg:mx-5 md:mx-5 mx-1 w-full lg:w-3/5 h-auto flex flex-col justify-between px-7 lg:px-0 mt-10 lg:mt-0">
            <div>
              <h1 className="lg:text-3xl md:text-3xl text-xl font-bold lg:pb-3 md:pb-3 pb-1">
                {productDetails.title}
              </h1>
            </div>
            <div className="">
              <h3 className="h-1/2 lg:text-xl md:text-xl text-base lg:mt-14 md:mt-16 mt-3">
                {productDetails.description}
              </h3>
            </div>
            <div className="w-full flex flex-row lg:flex-row justify-between items-start lg:mt-10 mt-5">
              <h2 className="text-lg font-bold">€{productDetails.price}</h2>
              <div>
                <button
                  onClick={() => handleAddToBasket(Params.id)}
                  className="text-sm lg:text-base md:text-base bg-orange-500 lg:px-16 md:px-16 px-3 py-2 rounded-md my-0 font-semibold hover:scale-110 transition duration-500 ease-in-out"
                >
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
