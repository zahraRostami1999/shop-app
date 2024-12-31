import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/CartSlice";
import { removeFromCart } from "../redux/CartSlice";

export const useHandleRemove = () => {
  const dispatch = useDispatch();
  return (id: string, qty: number, title: string) => {
    if (qty === 1) {
      const confirmDelete = window.confirm(
        `This is the last item. Are you sure you want to remove ${title} from the cart?`
      );
      if (confirmDelete) {
        dispatch(deleteFromCart(id));
      }
    } else {
      dispatch(removeFromCart(id));
    }
  };
};
