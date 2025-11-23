import { FaCartShopping } from "react-icons/fa6";
import { HeaderTextIconButton } from "../HeaderTextIconButton/HeaderTextIconButton";

import styles from './HeaderTextCartShoppingButton.module.scss';
import { useCart } from "../../../cart/hooks/useCart";

export function HeaderTextCartShoppingButton() {
  const { cartItemCount } = useCart();

  return (
    <HeaderTextIconButton className={styles.cart__button} to="/cart">
      <FaCartShopping className={styles.icon} />
      <div className={styles.badge}>{cartItemCount}</div>
    </HeaderTextIconButton>
  );
}
