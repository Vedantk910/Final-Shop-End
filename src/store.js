import {configureStore} from "@reduxjs/toolkit"
import { merchantReducer } from "./Reducers/Merchant";
import { productReducer } from "./Reducers/Products";
import { shopReducer } from "./Reducers/Shop";
import { userReducer } from "./Reducers/User";

const store = configureStore({
    reducer:{
        user:userReducer,
        merchant:merchantReducer,
        shop:shopReducer,
        product:productReducer,
    }
});

export default store;