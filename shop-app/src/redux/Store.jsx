import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./ProductSlice";

export const Store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
  },
});
