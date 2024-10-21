import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    AddToCart: (state, action) => {
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    },
  },
});

export const { AddToCart } = CartSlice.actions;
