import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageType } from "../../../shared/components/ImageViewer/ImageViewer.type";
import { Variation } from "../../../items/components/ItemDetail/ItemDetail.type";

const LOACL_STORAGE_KEY = "favorite";

export type FavoriteItem = {
  id: number;
  name: string;
  price: number;
  image: ImageType;
  variation: Variation;
};

type FavoriteState = {
  items: FavoriteItem[];
};

const favoriteSlice = createSlice({
  name: "favorite",

  initialState: (): FavoriteState => {
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
  },
  reducers: {
    addItem: (state, action: PayloadAction<FavoriteItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
        localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(LOACL_STORAGE_KEY, JSON.stringify(state.items));
    },
  },
});

export const { actions, reducer } = favoriteSlice;

export const selectFavoriteItems = (state: { favorite: FavoriteState }) =>
  state.favorite.items;

export const selectFavoriteItemCount = (state: { favorite: FavoriteState }) =>
  state.favorite.items.length;
