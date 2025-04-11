import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "../stores/cart/cartSlice";
import { useCallback } from "react";

export const useCartSummary = () => {
  const cartTotalPrice = useSelector(selectCartTotalPrice);
  const cartServiceFee = 0;

  const formattedPrice = useCallback((price: number) => {
    return price.toLocaleString("ja-JP", {
      style: "currency",
      currency: "JPY",
    });
  }, []);

  return {
    subtotal: formattedPrice(cartTotalPrice),
    shippingAndServiceFee: formattedPrice(cartServiceFee),
    total: formattedPrice(cartTotalPrice + cartServiceFee),
  };
}
