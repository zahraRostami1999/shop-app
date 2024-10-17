import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice(
    {
        name: "products",
        initialState:[
            {id:1, name: "Product 1", price: 10, description: "Description 1"},
        ],
        reducers:{

        }
    }
);
