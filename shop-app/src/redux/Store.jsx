import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./CartSlice";
import { IsLogin } from "./IsLogin";

export const Store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    isLogin: IsLogin.reducer,
  },
});
