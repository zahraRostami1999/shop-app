import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  qty: number;
}

interface CartState{
  cartItem: CartItem[];
}

const initialState: CartState = {
  cartItem: JSON.parse(localStorage.getItem("cartItem") || "[]"),
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action: PayloadAction<string>) => {
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