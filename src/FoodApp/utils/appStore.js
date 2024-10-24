
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlices';

const appstore = configureStore({
    reducer: {
        cart: cartReducer,
      },
})
export default appstore;