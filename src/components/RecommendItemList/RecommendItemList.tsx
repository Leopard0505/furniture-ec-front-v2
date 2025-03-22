
import { ListItem, ListItemProps } from '../ListItem/ListItem';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './RecommendItemList.module.scss';

interface RecommendItemListProps {
  items: ListItemProps[];
}

export function RecommendItemList(props: RecommendItemListProps) {

  return (
    <div className={styles.recommend_item__container}>
      <SectionTitle text='注目のおすすめ商品' />
      <div className={styles.recommend_item__list}>
        {props.items.map((item, index) => (
          <ListItem key={index} to={item.to} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
}
