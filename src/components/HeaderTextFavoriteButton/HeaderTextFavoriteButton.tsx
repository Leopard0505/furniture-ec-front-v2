import { FaRegHeart } from "react-icons/fa6";
import { HeaderTextIconButton } from "../HeaderTextIconButton/HeaderTextIconButton";

import styles from './HeaderTextFavoriteButton.module.scss';

export function HeaderTextFavoriteButton() {
  return (
    <HeaderTextIconButton to="/favorites" text="お気に入り">
      <FaRegHeart className={styles.icon} />
    </HeaderTextIconButton>
  );
}
