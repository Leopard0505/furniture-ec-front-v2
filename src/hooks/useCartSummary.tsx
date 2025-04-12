import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "../stores/cart/cartSlice";
import { formattedPrice } from "../utils/price";

export const useCartSummary = () => {
  const cartTotalPrice = useSelector(selectCartTotalPrice);
  const cartServiceFee = 0;

  return {
    subtotal: formattedPrice(cartTotalPrice),
    shippingAndServiceFee: formattedPrice(cartServiceFee),
    total: formattedPrice(cartTotalPrice + cartServiceFee),
  };
}
