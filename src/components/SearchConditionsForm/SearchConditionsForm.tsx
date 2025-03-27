
import { Button } from '../Button/Button';
import { CategoryLabel } from '../CategoryLabel/CategoryLabel';
import { ColorPalette } from '../ColorPalette/ColorPalette';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './SearchConditionsForm.module.scss';

export function SearchConditionsForm() {
  return (
    <div className={styles.search_conditions_form}>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='商品価格' size='small' />
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='カテゴリ' size='small' />
        <div className={styles.search_conditions_form__item__category}>
          <CategoryLabel text='スマホ' />
          <CategoryLabel text='タブレット' />
          <CategoryLabel text='PC' />
        </div>
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='レビュー' size='small' />
        <div className={styles.search_conditions_form__item__star}>
          <Button text='⭐️4.5〜' white />
          <Button text='⭐️4.0〜' white />
          <Button text='⭐️3.5〜' white />
        </div>
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='色' size='small' />
        <ColorPalette />
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='商品状態' size='small' />
        <div className={styles.search_conditions_form__item__status}>
          <Button text='新品' white />
          <Button text='中古' white />
          <Button text='レンタル' white />
        </div>
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='在庫状況' size='small' />
        <div>
          <Button text='在庫ありのみ表示' white />
        </div>
      </div>
      <div className={styles.search_conditions_form__item}>
        <SectionTitle text='送料' size='small' />
        <div>
          <Button text='送料無料のみ表示' white />
        </div>
      </div>
      <div className={styles.search_conditions_form__button}>
        <Button text='この条件で検索する' />
        <Button text='クリア' white />
      </div>
    </div>
  );
}
