import React from "react";
import { useSelector } from "react-redux";
import DisplaycartItems from "../components/DisplaycartItems";
import EmptyCartPage from "./EmptyCartPage";
import { RootState } from "../redux/store";

function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <>
      <div className=" min-h-screen w-full flex justify-center items-center flex-wrap">
        <ul className="flex justify-center flex-wrap">
          {cartItems.length > 0 ? <DisplaycartItems /> : <EmptyCartPage />}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
