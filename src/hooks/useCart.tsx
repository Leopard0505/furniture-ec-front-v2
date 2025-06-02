import { useDispatch, useSelector } from "react-redux";
import { selectCartItemCount, selectCartItems, selectLastAddedItem } from "../stores/cart/cartSlice";
import { addItem, removeItem } from "../stores/cart/cartActions";
import { CartItem } from "../interfaces/cart";

export const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartItemCount = useSelector(selectCartItemCount);
  const lastAddedItem = useSelector(selectLastAddedItem);

  const addToCart = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const removeFromCart = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  return {
    cartItems,
    cartItemCount,
    lastAddedItem,
    addToCart,
    removeFromCart,
  };
}
