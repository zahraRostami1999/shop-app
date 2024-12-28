import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../services/api";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface productDetails {
  image: string;
  title: string;
  price: number;
  description: string;
}

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [productDetails, setProductDetails] = useState<productDetails | null>(
    null
  );
  const dispatch = useDispatch();

  const handleAddToBasket = (id: string | undefined) => {
    if (id) {
      dispatch(AddToCart(id));
      toast(`You've added ${productDetails?.title} to your cart.`);
    }
  };

  useEffect(() => {
    getProductDetails(id).then((result) => {
      setProductDetails(result);
    });
  }, [id]);

  return (
    <>
      <div className="w-full min-h-screen flex items-center">
        <div className="h-full mx-auto mt-10 py-5 flex flex-col lg:flex-row justify-center lg:justify-around">
          <div className="w-32 h-44 sm:w-60 sm:h-72 md:w-80 md:h-96 lg:w-80 lg:h-96 mx-auto">
            <img
              src={productDetails?.image}
              alt={productDetails?.title}
              className="w-full object-cover"
            />
          </div>
          <div className="lg:mx-20 md:mx-0 md:px-20 sm:px-20 mx-1 w-full lg:w-3/5 h-auto flex flex-col justify-between px-7 lg:px-0 mt-5 lg:mt-0">
            <div>
              <h1 className="lg:text-3xl md:text-3xl text-base font-bold lg:pb-3 md:pb-3 pb-1">
                {productDetails?.title}
              </h1>
              <h3 className="h-1/2 lg:text-xl md:text-xl text-base lg:mt-14 md:mt-16 my-5">
                {productDetails?.description}
              </h3>
            </div>
            <div className="w-full flex flex-row lg:flex-row justify-between items-start lg:mt-10 mt-5">
              <h2 className="text-base font-bold text-green-700">
                €{productDetails?.price}
              </h2>
              <div>
                <button
                  onClick={() => handleAddToBasket(id)}
                  className="text-xs lg:text-base md:text-base bg-gold lg:px-16 md:px-16 px-3 py-2 rounded-md my-0 font-semibold hover:scale-110 transition duration-500 ease-in-out"
                >
                  Add to Basket
                </button>
              </div>
              <div>
                <Link to="/Products">
                  <button className="text-xs lg:text-base md:text-base bg-neutral-400 lg:px-16 md:px-16 px-3 py-2 rounded-md my-0 font-semibold hover:scale-110 transition duration-500 ease-in-out">
                    Back to Store
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
