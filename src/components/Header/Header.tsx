import { Link } from 'react-router';
import styles from "./Header.module.scss";
import reactLogo from '../../assets/react.svg'
import { HeaderTextLoginButton } from '../HeaderTextLoginButton/HeaderTextLoginButton';
import { HeaderTextProfileButton } from '../HeaderTextProfileButton/HeaderTextProfileButton';
import { HeaderTextFavoriteButton } from '../HeaderTextFavoriteButton/HeaderTextFavoriteButton';
import { HeaderTextCartShoppingButton } from '../HeaderTextCartShoppingButton/HeaderTextCartShoppingButton';
import { SearchField } from "../SearchField/SearchField";
import { useSearch } from "../../hooks/useSearch";
import { UserGuideButtonForHeader } from '../UserGuideButtonForHeader/UserGuideButtonForHeader';

export default function Header() {
  const { word, setWord, search } = useSearch();

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={reactLogo} className={styles.reactLogo} alt="React logo" />
      </Link>
      <SearchField word={word} onChange={(value) => setWord(value)} handleSearch={search} />
      <div className={styles.headerPrimaryFunction}>
        <UserGuideButtonForHeader />
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
