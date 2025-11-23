
import { LinkedImage, LinkedImageType } from '../../../shared/components/LinkedImage/LinkedImage';
import { SectionTitle } from '../../../shared/components/SectionTitle/SectionTitle';
import styles from './CouponApplicableItemList.module.scss';

interface CouponApplicableItemListProps {
  items: LinkedImageType[];
}

export function CouponApplicableItemList(props: CouponApplicableItemListProps) {

  return (
    <div className={styles.coupon_applicable_item__container}>
      <SectionTitle text='クーポン利用可能な商品' />
      <div className={styles.coupon_applicable_item__list}>
        {props.items.map((item) => (
          <LinkedImage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
