import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  qty: number;
  price: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") as string) || [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action: PayloadAction<{id: string; price: number}>) => {
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
    removeFromCart: (state, action: PayloadAction<string>) => {
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
    deleteFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { AddToCart, removeFromCart, deleteFromCart } = CartSlice.actions;
export default CartSlice.reducer;