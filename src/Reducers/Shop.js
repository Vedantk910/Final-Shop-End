import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const shopReducer = createReducer(initialState, {

    //Add Shop
    addShopRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    addShopSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    addShopFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    //Get all my shops
    GetMyShopsRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    GetMyShopsSuccess: (state, action) => {
        state.loading = false;
        state.shops = action.payload;
    },
    GetMyShopsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    // get all shops for user
    GetAllShopsRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    GetAllShopsSuccess: (state, action) => {
        state.loading = false;
        state.allShops = action.payload;
    },
    GetAllShopsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // get shop details
    GetShopDetailsRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    GetShopDetailsSuccess: (state, action) => {
        state.loading = false;
        state.shop = action.payload;
    },
    GetShopDetailsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // get shop details
    EditShopDetailsRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    EditShopDetailsSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    EditShopDetailsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // get all shops under the rabge of 1 km
    GetAllLocalShopsRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    GetAllLocalShopsSuccess: (state, action) => {
        state.loading = false;
        state.allShops = action.payload;
    },
    GetAllLocalShopsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) =>{
        state.error = null
        state.message=null
    }
})

