import styles from "./Header.module.scss";
import reactLogo from '../../assets/react.svg'
import { HeaderTextLoginButton } from '../HeaderTextLoginButton/HeaderTextLoginButton';
import { HeaderTextProfileButton } from '../HeaderTextProfileButton/HeaderTextProfileButton';
import { HeaderTextFavoriteButton } from '../HeaderTextFavoriteButton/HeaderTextFavoriteButton';
import { HeaderTextCartShoppingButton } from '../HeaderTextCartShoppingButton/HeaderTextCartShoppingButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className={styles.reactLogo} alt="React logo" />
      </a>
      <div className={styles.headerPrimaryFunction}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <HeaderTextLoginButton />
          </li>
          <li className={styles.item}>
            <HeaderTextProfileButton />
          </li>
          <li className={styles.item}>
            <HeaderTextFavoriteButton />
          </li>
          <li className={styles.item}>
            <HeaderTextCartShoppingButton />
          </li>
        </ul>
      </div>
    </header>
  );
}
