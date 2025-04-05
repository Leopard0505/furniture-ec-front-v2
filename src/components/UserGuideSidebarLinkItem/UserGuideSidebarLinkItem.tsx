
import { Link } from "react-router";
import styles from "./UserGuideSidebarLinkItem.module.scss";
interface UserGuideSidebarLinkItemProps {

  to: string;
  text: string;
}

export function UserGuideSidebarLinkItem(props: UserGuideSidebarLinkItemProps) {
  return (
    <li className={styles.guide__item}>
      <Link className={styles.guide__item__link} to={props.to}>
        {props.text}
      </Link>
    </li>
  );
}
