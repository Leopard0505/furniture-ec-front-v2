
import { LinkedImage, LinkedImageType } from '../LinkedImage/LinkedImage';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './RecommendItemList.module.scss';

interface RecommendItemListProps {
  items: LinkedImageType[];
}

export function RecommendItemList(props: RecommendItemListProps) {

  return (
    <div className={styles.recommend_item__container}>
      <SectionTitle text='注目のおすすめ商品' />
      <div className={styles.recommend_item__list}>
        {props.items.map((item) => (
          <LinkedImage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
