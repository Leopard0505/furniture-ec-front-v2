import { IoNotifications } from "react-icons/io5";
import { UserGuideButtonForHeader } from '../UserGuideButtonForHeader/UserGuideButtonForHeader';
import styles from './UserGuideForTop.module.scss';

export function UserGuideForTop() {
  return (
    <div className={styles.user__guide__for__top__container}>
      <div className={styles.user__guide__for__top}>
        <h3 className={styles.user__guide__for__top__header}>
          <IoNotifications />
          サイトの使い方を知る
        </h3>
        <div className={styles.user__guide__for__top__content}>
          初めての方へ、ようこそ。サイトの使い方や注意点をご紹介します。サイトを利用する際に参考にしてください。
          <br />
          サイトの使い方を理解することで、より快適にサイトを利用できます。
        </div>
        <UserGuideButtonForHeader />
      </div>
    </div>
  )
}
