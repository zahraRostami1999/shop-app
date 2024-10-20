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
      <div className="mt-24 border shadow-xl mx-auto py-3 w-5/12">
        <h1 className="text-2xl font-bold text-center py-3">
          {productDetails.title}
        </h1>
        <img
          src={productDetails.image}
          alt={productDetails.title}
          className=" w-1/2 h-96 mx-auto my-3"
        />
        <h2 className="text-lg font-bold text-center">
          {productDetails.price} $
        </h2>
        <h3 className="text-base px-10">{productDetails.description}</h3>
        <div className="flex justify-center items-center">
          <Link to="/cart">
            <button onClick={() => handleAddToBasket(Params.id)} className="bg-yellow-500 px-16 py-2 rounded-md my-5 font-semibold">
              Add to Basket
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
