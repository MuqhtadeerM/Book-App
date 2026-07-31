import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
import wishlistReducer from "./wishlist/wishlistSlice";
import searchReducer from "./search/searchSlice";
import uiReducer from "./ui/uiSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  search: searchReducer,
  ui: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
