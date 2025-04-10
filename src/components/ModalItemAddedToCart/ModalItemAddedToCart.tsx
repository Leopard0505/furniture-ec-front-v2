import styles from "./ModalItemAddedToCart.module.scss";
import { useCart } from "../../hooks/useCart";
import { Portal } from "../Portal/Portal";
import { usePrevious } from "../../hooks/usePrevios";
import { CartItem } from "../../stores/cart/cartSlice";

// -1: 減っている
// 1: 増えている
// 0: 変わらない
const compareTo = (current: CartItem[], prev: CartItem[]) => {
  if (current.length < prev.length) {
    return -1;
  } else if (current.length > prev.length) {
    return 1;
  } else {
    let result = 0;
    current.forEach((crrentItem) => {
      prev.forEach((prevItem) => {
        if (crrentItem.id === prevItem.id && crrentItem.quantity < prevItem.quantity) {
          result = -1;
          return;
        } else if (crrentItem.id === prevItem.id && crrentItem.quantity > prevItem.quantity) {
          result = 1;
          return;
        }
      });
    });
    return result;
  }
};

export function ModalItemAddedToCart() {
  const { cartItems } = useCart();
  const prevCartItems = usePrevious(cartItems);

  if (compareTo(cartItems, prevCartItems) <= 0) {
    return <></>;
  }

  return (
    <Portal>
      <div className={styles.container}>
        <p className={styles.text}>Item added to cart</p>
      </div>
    </Portal>
  );
}
