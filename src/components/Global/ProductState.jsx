import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allproducts: [],
    myCart: [],
    categories: []
};

const ProductState = createSlice({
    name: "product",
    initialState,
    reducers: {
        GetAllProduct: (state, {payload})=>{
            state.allproducts = payload
            // console.log(payload);
        },
        GetAllCategories: (state, {payload})=>{
            state.categories = payload
            console.log(payload);
        },

        AddToCart: (state, {payload})=>{
            state.myCart.push(payload)
            console.log(payload)
        }
    },
})



export const {GetAllProduct, AddToCart, GetAllCategories} = ProductState.actions;
export default  ProductState.reducer;