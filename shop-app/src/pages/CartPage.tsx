import React from "react";
import { useSelector } from "react-redux";
import EmptyCartPage from "./EmptyCartPage";
import { RootState } from "../redux/Store";
import ShoppingCart from "../components/ShoppingCart";

function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <>
      <div className="w-full flex justify-center items-center flex-wrap">
        <ul className="flex justify-center flex-wrap w-full">
          {cartItems.length > 0 ? <ShoppingCart /> : <EmptyCartPage />}
        </ul>
      </div>
    </>
  );
}

export default CartPage;
