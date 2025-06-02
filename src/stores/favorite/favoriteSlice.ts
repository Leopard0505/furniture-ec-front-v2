import { createReducer } from "@reduxjs/toolkit";
import { FavoriteItem } from "../../interfaces/favorite";
import { addItem, removeItem } from "./favoriteActions";

const LOACL_STORAGE_KEY = "favorite";

type FavoriteState = {
  items: FavoriteItem[];
};

export const createInitialFavoriteState = (): FavoriteState => {
  let items: FavoriteItem[] = [];
  try {
    const storedFavorite = localStorage.getItem(LOACL_STORAGE_KEY);
    items = storedFavorite ? JSON.parse(storedFavorite) : [];
  } catch {
    items = [];
  }
  return {
    items,
  };
};

const reducers = createReducer(createInitialFavoriteState(), (builder) => {
  builder
    .addCase(addItem, (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
        localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
      }
    })
    .addCase(removeItem, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
    });
});

export const favoriteRootReducer = {
  favorite: reducers,
};

export const selectFavoriteItems = (state: { favorite: FavoriteState }) =>
  state.favorite.items;

export const selectFavoriteItemCount = (state: { favorite: FavoriteState }) =>
  state.favorite.items.length;
