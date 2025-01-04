import React from "react";
import Spinner from "./Spinner";
import DisplaycartItems from "./DisplaycartItems";
import ConfirmOrder from "./ConfirmOrder";
import { useGettingProducts } from "../services/Query";

const ShoppingCart = () => {
  const { isLoading: loading } = useGettingProducts();
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
