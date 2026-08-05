import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
import searchReducer from "./search/searchSlice";
import uiReducer from "./ui/uiSlice";
import wishlistReducer from "./wishlist/wishlistSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  search: searchReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
