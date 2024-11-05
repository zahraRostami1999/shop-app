import { createSlice } from "@reduxjs/toolkit";

export const IsLogin = createSlice({
  name: "IsLogin",
  initialState: {
    isLoggedIn: false,
    user: {
      userName: "zahra",
      passWord: "12345",
    },
  },
  reducers: {
    checkUser: (state, actions) => {
      let username = actions.payload.username;
      let password = actions.payload.password;
      state.isLoggedIn = state.user.userName === username && state.user.passWord === password;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { checkUser, logoutUser } = IsLogin.actions;
export default IsLogin.reducer;
