import { createSlice } from "@reduxjs/toolkit";

interface LoggedIn {
    isLoggedIn: boolean;
}

const initialState: LoggedIn = {
    isLoggedIn: false,
}

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", "false");
    },
  },
});

export const { logIn, logOut } = UserSlice.actions;
export default UserSlice.reducer;
