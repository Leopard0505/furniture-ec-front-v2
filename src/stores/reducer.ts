import { combineReducers } from "@reduxjs/toolkit";
import { cartRootReducer } from "./cart/cartSlice";
import { favoriteRootReducer } from "./favorite/favoriteSlice";

export const rootReducer = combineReducers({
  ...cartRootReducer,
  ...favoriteRootReducer,
});
