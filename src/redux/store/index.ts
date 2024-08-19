import { configureStore } from "@reduxjs/toolkit";

import productApi from "../api/productApi";
import { fetchProducts, productReducer } from "../slices/productSlice";
import { themeReducer } from "../slices/themeSlice";
import { cartReducer } from "../slices/cartSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        theme: themeReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(productApi.middleware) 
});

export type RootState = ReturnType<typeof store.getState>;
export default store;


//* initiate values
store.dispatch(fetchProducts());