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
      <div className=" h-3/4 mt-24 border shadow-xl mx-auto py-3 flex ">
        <div className=" w-3/4">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className=" w-full  mx-auto my-3"
          />
        </div>
        <div className="mx-5 ">
          <h1 className="text-3xl font-bold my-5 py-3">
            {productDetails.title}
          </h1>
          <h3 className=" h-1/2 text-xl mb-16">{productDetails.description}</h3>
          <div className="w-1/2  flex justify-between items-center">
            <h2 className="text-lg font-bold ">
            €{productDetails.price}
            </h2>

            <div className="flex items-center">
              <Link to="/cart">
                <button
                  onClick={() => handleAddToBasket(Params.id)}
                  className="bg-orange-500 px-16 py-2 rounded-md my-5 font-semibold"
                >
                  Add to Basket
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
