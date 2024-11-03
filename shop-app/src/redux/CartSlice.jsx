import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [],
  },
  reducers: {
    AddToCart: (state, action) => {
      let selected = state.cartItem.find(
        (item) => item.id === parseInt(action.payload)
      );
      if (selected === undefined) {
        return {
          ...state,
          cartItem: [
            ...state.cartItem,
            { id: parseInt(action.payload), qty: 1 },
          ],
        };
      } else {
        state.cartItem = state.cartItem.map((item) => {
          if (item.id === parseInt(action.payload)) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    removeFromCart: (state, action) => {
      let selected = state.cartItem.find(
        (item) => item.id === parseInt(action.payload)
      );

      if (selected.qty === 1) {
        let filtered = state.cartItem.filter(
          (item) => item.id !== parseInt(action.payload)
        );
        return {
          ...state,
          cartItem: filtered,
        };
      } else {
        const updatedCart = state.cartItem.map((item) => {
          if (item.id === parseInt(action.payload)) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        });
        return {
          ...state,
          cartItem: updatedCart,
        };
      }
    },
    deleteFromCart: (state, action) => {
      let filtered = state.cartItem.filter(
        (item) => item.id !== parseInt(action.payload)
      );
      return {
        ...state,
        cartItem: filtered,
      };
    },
  },
});

export const { AddToCart, removeFromCart, deleteFromCart } = CartSlice.actions;
