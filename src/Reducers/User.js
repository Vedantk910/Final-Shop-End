import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const userReducer = createReducer(initialState, {

    LoginRequest: (state) => {
        state.loading = true;                                               //This is an arrow function not an object
    },

    //Manipulating User Login
    UserLoginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },

    //Manipulating Merchant Login
    MerchantLoginSuccess: (state, action) => {
        state.loading = false;
        state.merchant = action.payload;
        state.isAuthenticated = true;
    },

    //Login failure
    LoginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    //Manipulating Logout
    LogoutRequest: (state) => {
        state.loading = true;
    },
    LogoutSuccess: (state, action) => {
        state.loading = false;
        state.user = null;
        state.merchant = null;
        state.message = action.payload;
        state.isAuthenticated = false;
    },
    LogoutFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
    },



    //manipulating Register User
    RegisterRequest: (state) => {
        state.loading = true;
    },
    RegisterSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    RegisterFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    toBusinessRequest: (state) => {
        state.loading = true
    },
    toBusinessSuccess: (state, action) => {
        state.loading = false;
        state.user = null;
        state.merchant = action.payload;
        state.isAuthenticated = true;
    },
    toBusinessFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    //Manipulating Load User or Merchant
    LoadRequest: (state, action) => {
        state.loading = true
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoadMerchantSuccess: (state, action) => {
        state.loading = false;
        state.merchant = action.payload;
        state.isAuthenticated = true;
    },
    LoadFailure: (state, action) => {
        state.loading = false;
        state.LoadError = action.payload;
        state.isAuthenticated = false;
    },

    // change password
    ChangeUserPasswordRequest: (state) => {
        state.loading = true;                                               //This is an arrow function not an object
    },
    ChangeUserPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    ChangeUserPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    AddToCartRequest: (state) => {
        state.cartLoading = true;                                               //This is an arrow function not an object
    },
    AddToCartSuccess: (state, action) => {
        state.cartLoading = false;
        state.cartMessage = action.payload;
    },
    AddToCartFailure: (state, action) => {
        state.cartLoading = false;
        state.cartError = action.payload;
    },
    cart: (state, action) => {
        state.cartLoading = false;
        state.cart = action.payload;
    },

    clearErrors: (state) => {
        state.error = null;
        state.message = null
    }
})