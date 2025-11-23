import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageType } from "../../../shared/components/ImageViewer/ImageViewer.type";
import { Variation } from "../../../items/components/ItemDetail/ItemDetail.type";

const LOACL_STORAGE_KEY = "cart";

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: ImageType;
  variation: Variation;
  stock: boolean;
};

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

const cartSlice = createSlice({
  name: "cart",

  initialState: (): CartState => {
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
  },
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
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
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.lastRemovedItem = state.items.find(
        (item) => item.id === action.payload
      ) as CartLastRemovedItem;
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
    },
  },
});

export const { actions, reducer } = cartSlice;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export const selectCartItemCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export const selectLastAddedItem = (state: { cart: CartState }) =>
  state.cart.lastAddedItem;

export const selectLastRemovedItem = (state: { cart: CartState }) =>
  state.cart.lastRemovedItem;

export const selectCartTotalPrice = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
