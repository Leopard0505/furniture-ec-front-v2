import { useDispatch, useSelector } from "react-redux";
import { actions as cartActions, selectCartItemCount } from "../stores/cart/cartSlice";
import type { CartItem } from "../stores/cart/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();

  const cartItemCount = useSelector(selectCartItemCount);

  const addToCart = (item: CartItem) => {
    dispatch(cartActions.addItem(item));
  };

  return {
    cartItemCount,
    addToCart,
  };
}
