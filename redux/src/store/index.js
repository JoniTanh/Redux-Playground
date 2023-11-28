import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
import uiReducer from "./ui";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    ui: uiReducer,
    cart: cartReducer,
  },
});

export default store;
