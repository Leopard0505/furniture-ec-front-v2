import { FaRegHeart } from "react-icons/fa6";
import { HeaderTextIconButton } from "../HeaderTextIconButton/HeaderTextIconButton";

import styles from './HeaderTextFavoriteButton.module.scss';

export function HeaderTextFavoriteButton() {
  return (
    <HeaderTextIconButton to="/favorites">
      <FaRegHeart className={styles.icon} />
    </HeaderTextIconButton>
  );
}
