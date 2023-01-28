import {configureStore} from "@reduxjs/toolkit"

import cartReducers from "../features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducers,
  },
});