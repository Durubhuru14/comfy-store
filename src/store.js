import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
