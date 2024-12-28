import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./CartSlice";
import { UserSlice } from "./UserSlice";

export const Store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    user: UserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;