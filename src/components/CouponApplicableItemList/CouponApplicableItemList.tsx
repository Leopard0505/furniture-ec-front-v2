
import { ListItem, ListItemType } from '../ListItem/ListItem';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './CouponApplicableItemList.module.scss';

interface CouponApplicableItemListProps {
  items: ListItemType[];
}

export function CouponApplicableItemList(props: CouponApplicableItemListProps) {

  return (
    <div className={styles.coupon_applicable_item__container}>
      <SectionTitle text='クーポン利用可能な商品' />
      <div className={styles.coupon_applicable_item__list}>
        {props.items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
