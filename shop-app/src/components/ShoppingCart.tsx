import React from "react";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";
import DisplaycartItems from "./DisplaycartItems";
import ConfirmOrder from "./ConfirmOrder";

const ShoppingCart = () => {
  const { data: productItems, loading } = useFetch();
  return (
    <>
      {loading ? (
        <div className="w-full">
          <Spinner />
        </div>
      ) : (
        <div className="">
          <div className="w-full">
            <DisplaycartItems />
          </div>
          <div className="w-full flex justify-center">
            <ConfirmOrder />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
