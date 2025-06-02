import { createAction } from "@reduxjs/toolkit";
import { FavoriteItem } from "../../interfaces/favorite";

export const addItem = createAction<FavoriteItem>("favorite/addItem");
export const removeItem = createAction<number>("favorite/removeItem");
