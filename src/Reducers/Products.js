import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const productReducer = createReducer(initialState, {

    //All Products of a shop
    allShopProductsRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    allShopProductsSuccess: (state, action) => {
        state.loading = false;
        state.products = action.payload;
    },
    allShopProductsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //A product reducer
    productRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    productSuccess: (state, action) => {
        state.loading = false;
        state.product = action.payload;
    },
    productFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    //Add product reducer
    addProductRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    addProductSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    addProductFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //delete product reducer
    deleteProductRequest: (state) => {
        state.loading= true;
    },
    deleteProductSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteProductFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //show product details 
    showProductDetailRequest: (state) => {
        state.loading= true;
    },
    showProductDetailSuccess: (state, action) => {
        state.loading = false;
        state.product = action.payload;
    },
    showProductDetailFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //edit product details 
    editProductDetailRequest: (state) => {
        state.loading= true;
    },
    editProductDetailSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    editProductDetailFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //clear all messages and errors
    clearErrors:(state)=>{
        state.error=null
        state.message=null
    }

})