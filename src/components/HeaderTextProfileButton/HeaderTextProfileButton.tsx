import { MdOutlineAccountCircle } from "react-icons/md";
import { HeaderTextIconButton } from "../HeaderTextIconButton/HeaderTextIconButton";

import styles from './HeaderTextProfileButton.module.scss';

export function HeaderTextProfileButton() {
  return (
    <HeaderTextIconButton to="/profile" text="マイページ">
      <MdOutlineAccountCircle className={styles.icon} />
    </HeaderTextIconButton>
  );
}
