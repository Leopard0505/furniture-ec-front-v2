
import { userGuide } from "../../constants/guide";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { UserGuideSidebarLinkItem } from "../UserGuideSidebarLinkItem/UserGuideSidebarLinkItem";
import styles from "./UserGuideSidebar.module.scss";

export function UserGuideSidebar() {
  return (
    <div className={styles.sidebar}>
      <SectionTitle text="ご利用ガイド" size="small" />
      {userGuide.map(({ id, title, list }) => (
        <div key={id}>
          <div className={styles.sidebar__sub__title}>{title}</div>
          <ul className={styles.sidebar__sub__list}>
            {list.map((list) => (
              <UserGuideSidebarLinkItem key={list.to} to={list.to} text={list.text} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
