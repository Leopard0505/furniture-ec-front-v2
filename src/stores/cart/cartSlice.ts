import {
  // combineReducers,
  createReducer,
  createSelector,
} from "@reduxjs/toolkit";
import { ImageType } from "../../components/ImageViewer/ImageViewer.type";
import { Variation } from "../../components/ItemDetail/ItemDetail.type";
import { CartItem } from "../../interfaces/cart";
import { addItem, clearCart, removeItem } from "./cartActions";
// import { TypedUseSelectorHook, useSelector } from "react-redux";

const LOACL_STORAGE_KEY = "cart";

export type CartLastAddedItem = CartItem;
export type CartLastRemovedItem = {
  id: number;
  name: string;
  image: ImageType;
  variation: Variation;
};

type CartState = {
  items: CartItem[];
  lastAddedItem: CartItem | null;
  lastRemovedItem: CartLastRemovedItem | null;
};

const createInitialCartState = (): CartState => {
  let items: CartItem[] = [];
  try {
    const storedCart = localStorage.getItem(LOACL_STORAGE_KEY);
    items = storedCart ? JSON.parse(storedCart) : [];
  } catch {
    items = [];
  }
  return {
    items,
    lastAddedItem: null,
    lastRemovedItem: null,
  };
};

const reducers = createReducer(createInitialCartState(), (builder) => {
  builder
    .addCase(addItem, (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.lastAddedItem = { ...action.payload };
      localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
    })
    .addCase(removeItem, (state, action) => {
      state.lastRemovedItem = state.items.find(
        (item) => item.id === action.payload
      ) as CartLastRemovedItem;
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
    })
    .addCase(clearCart, (state) => {
      state.items = [];
      localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
    });
});

export const cartRootReducer = {
  cart: reducers,
};

// const localReducer = combineReducers(cartRootReducer);
// type CartRootState = ReturnType<typeof localReducer>;
// export const useCartSelector: TypedUseSelectorHook<CartRootState> = useSelector;

const selectCartState = (state: { cart: CartState }) => state.cart;
export const selectCartItems = createSelector(
  selectCartState,
  (cart) => cart.items
);
export const selectCartItemCount = createSelector(selectCartState, (cart) =>
  cart.items.reduce((totalCount, { quantity }) => totalCount + quantity, 0)
);
export const selectLastAddedItem = createSelector(
  selectCartState,
  (cart) => cart.lastAddedItem
);
export const selectLastRemovedItem = createSelector(
  selectCartState,
  (cart) => cart.lastRemovedItem
);
export const selectCartTotalPrice = createSelector(selectCartState, (cart) =>
  cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
);
