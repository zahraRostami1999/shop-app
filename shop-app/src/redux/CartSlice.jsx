import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const { id, price } = action.payload;
      const selected = state.cartItems.find((item) => item.id === id);

      if (!selected) {        
        state.cartItems.push({ id, qty: 1, price });
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const selected = state.cartItems.find((item) => item.id === id);

      if (selected && selected.qty === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { AddToCart, removeFromCart, deleteFromCart } = CartSlice.actions;
export default CartSlice.reducer;