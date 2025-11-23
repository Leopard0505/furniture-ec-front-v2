import { useDispatch, useSelector } from "react-redux";
import { actions as cartActions, selectCartItemCount, selectCartItems, selectLastAddedItem } from "../store/cart/cartSlice";
import type { CartItem } from "../store/cart/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartItemCount = useSelector(selectCartItemCount);
  const lastAddedItem = useSelector(selectLastAddedItem);

  const addToCart = (item: CartItem) => {
    dispatch(cartActions.addItem(item));
  };

  const removeFromCart = (itemId: number) => {
    dispatch(cartActions.removeItem(itemId));
  };

  return {
    cartItems,
    cartItemCount,
    lastAddedItem,
    addToCart,
    removeFromCart,
  };
}
