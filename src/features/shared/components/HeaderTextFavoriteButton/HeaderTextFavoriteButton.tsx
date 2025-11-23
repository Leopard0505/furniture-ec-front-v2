import { FaRegHeart } from "react-icons/fa6";
import { HeaderTextIconButton } from "../HeaderTextIconButton/HeaderTextIconButton";

import styles from './HeaderTextFavoriteButton.module.scss';
import { PATH } from "../../../../constants/path";

export function HeaderTextFavoriteButton() {
  return (
    <HeaderTextIconButton to={PATH.ME_FAVORITES()}>
      <FaRegHeart className={styles.icon} />
    </HeaderTextIconButton>
  );
}
