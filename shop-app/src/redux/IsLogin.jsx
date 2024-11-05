import { createSlice } from "@reduxjs/toolkit";

export const IsLogin = createSlice({
    name: "IsLogin",
    initialState: {
        isLoggedIn: false,
        user: {
            'zahra': 12345,
        }
    },
    reducers:{
        
    }
})

export default IsLogin.reducer;