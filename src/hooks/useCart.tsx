import { useDispatch, useSelector } from "react-redux";
import { actions as cartActions, selectCartItemCount, selectCartItems } from "../stores/cart/cartSlice";
import type { CartItem } from "../stores/cart/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartItemCount = useSelector(selectCartItemCount);

  const addToCart = (item: CartItem) => {
    dispatch(cartActions.addItem(item));
  };

  const removeFromCart = (itemId: number) => {
    dispatch(cartActions.removeItem(itemId));
  };

  return {
    cartItems,
    cartItemCount,
    addToCart,
    removeFromCart,
  };
}
