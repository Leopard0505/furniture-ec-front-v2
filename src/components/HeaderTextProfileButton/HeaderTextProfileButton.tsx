import { MdSwitchAccount } from "react-icons/md";
import { HeaderTextIconButton } from "../HeaderTextIconButton/HeaderTextIconButton";

import styles from './HeaderTextProfileButton.module.scss';
import { PATH } from "../../constants/path";

export function HeaderTextProfileButton() {
  return (
    <HeaderTextIconButton to={PATH.ME()}>
      <MdSwitchAccount className={styles.icon} />
    </HeaderTextIconButton>
  );
}
