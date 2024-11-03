import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: JSON.parse(localStorage.getItem("cartItem")) || [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      let selected = state.cartItem.find(
        (item) => item.id === parseInt(action.payload)
      );

      if (!selected) {
        state.cartItem.push({ id: parseInt(action.payload), qty: 1 });
      } else {

        state.cartItem = state.cartItem.map((item) =>
          item.id === parseInt(action.payload)
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    removeFromCart: (state, action) => {
      const selected = state.cartItem.find(
        (item) => item.id === parseInt(action.payload)
      );

      if (selected && selected.qty === 1) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== parseInt(action.payload)
        );
      } else {

        state.cartItem = state.cartItem.map((item) =>
          item.id === parseInt(action.payload)
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    deleteFromCart: (state, action) => {

      state.cartItem = state.cartItem.filter(
        (item) => item.id !== parseInt(action.payload)
      );


      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
  },
});

export const { AddToCart, removeFromCart, deleteFromCart } = CartSlice.actions;
export default CartSlice.reducer;