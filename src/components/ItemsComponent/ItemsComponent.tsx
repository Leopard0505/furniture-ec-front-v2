import { SearchConditionsForm } from '../SearchConditionsForm/SearchConditionsForm';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import styles from './ItemsComponent.module.scss';

export function ItemsComponent() {

  return (
    <div className={styles.items__container}>
      <SearchConditionsForm />
      <div>
        <div>並び替え</div>
        <div>
          <SectionTitle text={'カテゴリ名'} />
          <div>商品一覧</div>
          <div>ページネーション</div>
        </div>
      </div>
    </div>
  );
}
