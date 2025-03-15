import { MdOutlineAccountCircle } from "react-icons/md";
import { HeaderTextIconButton } from "../HeaderTextIconButton/HeaderTextIconButton";

import styles from './HeaderTextLoginButton.module.scss';

export function HeaderTextLoginButton() {
  return (
    <HeaderTextIconButton to="/sign-in" text="ログイン">
      <MdOutlineAccountCircle className={styles.icon} />
    </HeaderTextIconButton>
  );
}
