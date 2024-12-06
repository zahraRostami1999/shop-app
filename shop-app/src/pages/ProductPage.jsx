import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../services/api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/CartSlice";

function ProductPage() {
  const Params = useParams();
  const [productDetails, setProductDetails] = useState({});
  const dispatch = useDispatch();

  const handleAddToBasket = (id) => {
    dispatch(AddToCart(id));
  };

  useEffect(() => {
    getProductDetails(Params.id).then((result) => {
      setProductDetails(result);
    });
  }, []);

  return (
    <>
      <div className="h-screen w-full">
        <div className="lg:h-3/4 md:h-3/5 h-1/2 mx-auto mt-20 py-5 flex justify-around">
          <div className="lg:w-2/5 md:w-4/5 w-3/5 h-11/12">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="w-full h-full"
            />
          </div>
          <div className="lg:mx-5 md:mx-5 mx-1 w-3/5 h-11/12 flex flex-wrap items-between h-full">
            <div>
              <h1 className="lg:text-3xl md:text-3xl text-base font-bold lg:pb-3 md:pb-3 pb-1">{productDetails.title}</h1>
            </div>
            <div>
              <h3 className=" h-1/2 lg:text-xl md:text-xl text-xs lg:mt-14 md:mt-16 mt-3">
                {productDetails.description}
              </h3>
            </div>
            <div className="w-full flex justify-around items-end lg:mt-10">
              <h2 className="text-lg font-bold ">€{productDetails.price}</h2>
              <div>
                <button
                  onClick={() => handleAddToBasket(Params.id)}
                  className="text-xs lg:text-base md:text-base bg-orange-500 lg:px-16 md:px-16 px-3 py-2 rounded-md my-0 font-semibold hover:scale-110  transition duration-500 ease-in-out"
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
