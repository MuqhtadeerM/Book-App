import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";

export const rootReducer = combineReducers({
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
