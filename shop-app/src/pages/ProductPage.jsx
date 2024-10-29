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
      <div className="h-screen  w-full">
        <div className="h-3/4 mx-auto mt-24  py-8 flex justify-around">
          <div className="bg-red-700 w-2/5 h-11/12">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="w-full h-full "
            />
          </div>
          <div className="mx-5 w-2/5 h-11/12">
            <h1 className="text-3xl font-bold py-3">{productDetails.title}</h1>
            <h3 className=" h-1/2 text-xl mt-10">
              {productDetails.description}
            </h3>
            <div className="w-2/3  flex justify-between items-center mt-5">
              <h2 className="text-lg font-bold ">€{productDetails.price}</h2>

              <div>
                <button
                  onClick={() => handleAddToBasket(Params.id)}
                  className="bg-orange-500 px-16 py-2 rounded-md my-5 font-semibold"
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
