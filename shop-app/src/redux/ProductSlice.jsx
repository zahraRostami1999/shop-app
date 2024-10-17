import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice(
    {
        name: "products",
        initialState:{
            items:[]
        },
        reducers:{
            addProduct: (state, action) => {
                return {
                ...state,
                items: [...state.items, action.payload]
              };
        }
    },
});

export const { addProduct } = ProductSlice.actions;
