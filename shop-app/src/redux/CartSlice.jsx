import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    
    AddToCart: (state, action) => {
      let selected = state.cartItem.find(
        (item) => item.id === parseInt(action.payload)
      );
      if (selected === undefined) {
        return {
          ...state,
          cartItem: [...state.cartItem, { id: parseInt(action.payload), qty: 1 }],
        };
      } else {
        state.cartItem = state.cartItem.map((item) => {
          if (item.id === parseInt(action.payload)) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
      }
    },

  },
});

export const { AddToCart } = CartSlice.actions;
