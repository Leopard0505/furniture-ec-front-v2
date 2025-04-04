import { Item, ItemProps } from '../Item/Item';
import { ItemSortField } from '../ItemSortField/ItemSortField';
import { Pagenation } from '../Pagenation/Pagenation';
import { SearchConditionsForm } from '../SearchConditionsForm/SearchConditionsForm';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import styles from './ItemsComponent.module.scss';

interface ItemsComponentProps {
  items: ItemProps[];
  currentPage: number;
  totalPages: number;
}

export function ItemsComponent(props: ItemsComponentProps) {

  return (
    <div className={styles.items__container}>
      <SearchConditionsForm />
      <div className={styles.items__container__content}>
        <ItemSortField />
        <div>
          <SectionTitle text={'カテゴリ名'} />
          <div className={styles.items__container__content__list}>
            {props.items.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </div>
          <Pagenation currentPage={props.currentPage} totalPages={props.totalPages} />
        </div>
      </div>
    </div>
  );
}
