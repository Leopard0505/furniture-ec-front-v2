import { FaCartShopping } from "react-icons/fa6";
import { HeaderTextIconButton } from "../HeaderTextIconButton/HeaderTextIconButton";

import styles from './HeaderTextCartShoppingButton.module.scss';

export function HeaderTextCartShoppingButton() {
  return (
    <HeaderTextIconButton to="/cart" text="カート">
      <FaCartShopping className={styles.icon} />
    </HeaderTextIconButton>
  );
}
