import { configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart/cartSlice";
import { reducer as favoriteReducer } from "./favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
