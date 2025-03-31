import { KeyboardEvent } from "react";
import { BsFilterLeft } from "react-icons/bs";
import styles from './ItemSortField.module.scss';
import { Button } from "../Button/Button";
import { useAccordion } from "../../hooks/useAccordion";
import { useKeyupFunction } from "../../hooks/useKeyupFunction";
import { useItemSort } from "../../hooks/useItemSort";

export function ItemSortField() {
  const { convertClassName, handleClickAccordion } = useAccordion(styles.item__sort__field__list, styles.item__sort__field__list__open);
  const { handleEnterKey } = useKeyupFunction();
  const { handleSetItemSort, handleSort, handleClearSort } = useItemSort();

  return (
    <div className={styles.item__sort__field}>
      <div className={styles.item__sort__field__container} onClick={handleClickAccordion} onKeyUp={(e: KeyboardEvent) => handleEnterKey(e, handleClickAccordion)}>
        <div>並び替え</div>
        <BsFilterLeft className={styles.item__sort__field__container__icon} />
      </div>
      <div className={convertClassName}>
        <div className={styles.item__sort__field__list__inner}>
          <div className={styles.item__sort__field__list__inner__row}>
            <div className={styles.item__sort__field__list__item} onClick={() => handleSetItemSort('price', 'asc')}>価格：安い順</div>
            <div className={styles.item__sort__field__list__item} onClick={() => handleSetItemSort('price', 'desc')}>価格：高い順</div>
            <div className={styles.item__sort__field__list__item} onClick={() => handleSetItemSort('created_at', 'desc')}>新着商品</div>
            <div className={styles.item__sort__field__list__item} onClick={() => handleSetItemSort('review_count', 'desc')}>レビュー数が多い順</div>
            <div className={styles.item__sort__field__list__item} onClick={() => handleSetItemSort('review_average', 'desc')}>レビュー評価：高い順</div>
          </div>
          <div className={styles.item__sort__field__list__button}>
            <Button text='クリア' white onClick={handleClearSort} />
            <Button
              text='この条件で並び替える'
              onClick={() => {
                handleSort();
                handleClickAccordion();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
