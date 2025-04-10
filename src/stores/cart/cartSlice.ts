import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageType } from "../../components/ImageViewer/ImageViewer.type";
import { Variation } from "../../components/ItemDetail/ItemDetail.type";

const LOACL_STORAGE_KEY = "cart";

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: string;
  image: ImageType;
  variation: Variation;
  stock: boolean;
};

type CartState = {
  items: CartItem[];
};

const cartSlice = createSlice({
  name: "cart",

  initialState: () => {
    let items: CartItem[] = [];
    try {
      const storedCart = localStorage.getItem(LOACL_STORAGE_KEY);
      items = storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return { items: [] };
    }
    return { items };
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
      localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { actions, reducer } = cartSlice;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export const selectCartItemCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);
