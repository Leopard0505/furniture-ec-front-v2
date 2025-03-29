import { ItemSortField } from '../ItemSortField/ItemSortField';
import { Pagenation } from '../Pagenation/Pagenation';
import { SearchConditionsForm } from '../SearchConditionsForm/SearchConditionsForm';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import styles from './ItemsComponent.module.scss';

interface ItemsComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ItemsComponent(props: ItemsComponentProps) {

  return (
    <div className={styles.items__container}>
      <SearchConditionsForm />
      <div className={styles.items__container__content}>
        <ItemSortField />
        <div>
          <SectionTitle text={'カテゴリ名'} />
          <div>商品一覧</div>
          <Pagenation currentPage={props.currentPage} totalPages={props.totalPages} onPageChange={props.onPageChange} />
        </div>
      </div>
    </div>
  );
}
