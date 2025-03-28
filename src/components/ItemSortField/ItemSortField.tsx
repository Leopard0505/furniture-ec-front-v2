import { BsFilterLeft } from "react-icons/bs";
import styles from './ItemSortField.module.scss';
import { Button } from "../Button/Button";
import { useAccordion } from "../../hooks/useAccordion";

export function ItemSortField() {
  const { convertClassName, handleClick } = useAccordion(styles.item__sort__field__list, styles.item__sort__field__list__open);

  return (
    <div className={styles.item__sort__field}>
      <div className={styles.item__sort__field__container} onClick={handleClick}>
        <div>並び替え</div>
        <BsFilterLeft className={styles.item__sort__field__container__icon} />
      </div>
      <div className={convertClassName}>
        <div className={styles.item__sort__field__list__inner}>
          <div className={styles.item__sort__field__list__inner__row}>
            <div className={styles.item__sort__field__list__item}>価格：安い順</div>
            <div className={styles.item__sort__field__list__item}>価格：高い順</div>
            <div className={styles.item__sort__field__list__item}>新着商品</div>
            <div className={styles.item__sort__field__list__item}>レビュー数が多い順</div>
            <div className={styles.item__sort__field__list__item}>レビュー評価：高い順</div>
          </div>
          <div className={styles.item__sort__field__list__button}>
            <Button text='クリア' white />
            <Button text='この条件で並び替える' />
          </div>
        </div>
      </div>
    </div>
  );
}
