import { createSlice } from "@reduxjs/toolkit";

export const IsLogin = createSlice({
    name: "IsLogin",
    initialState: {
        isLoggedIn: false
    },
    reducers:{}
})

export default IsLogin.reducer;