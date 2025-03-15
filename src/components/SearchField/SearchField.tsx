import { BsSearch } from "react-icons/bs";

import styles from './SearchField.module.scss';

interface SearchFieldProps {
  word: string;
  onChange: (value: string) => void;
  handleSearch: () => Promise<void>;
}

export function SearchField(props: SearchFieldProps) {
  return (
    <div className={styles.search__field}>
      <input
        className={styles.search__field__input}
        type="text"
        placeholder='検索'
        value={props.word}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") props.handleSearch();
        }}
      />
      <BsSearch className={styles.search__field__icon} onClick={() => props.handleSearch()} />
    </div>
  );
}
