import { createAction } from "@reduxjs/toolkit";
import { CartItem } from "../../interfaces/cart";

export const addItem = createAction<CartItem>("cart/addItem");
export const removeItem = createAction<number>("cart/removeItem");
export const clearCart = createAction("cart/clearCart");
