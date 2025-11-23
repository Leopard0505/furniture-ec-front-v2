import { CheckoutCompleteMainView } from '../components/CheckoutCompleteMainView/CheckoutCompleteMainView'
import { CouponApplicableItemList } from '../components/CouponApplicableItemList/CouponApplicableItemList';
import { RecommendItemListForYou } from '../../items/components/RecommendItemListForYou/RecommendItemListForYou';
import itemImage1 from '@/assets/images/linked-item_1.png';

export function CheckoutComplete() {
  // クーポン利用可能な商品
  // TODO: APIから取得
  const couponApplicableItems = [
    { id: "1", to: "/items/1", src: itemImage1, alt: "商品A" },
    { id: "2", to: "/items/2", src: itemImage1, alt: "商品B" },
    { id: "3", to: "/items/3", src: itemImage1, alt: "商品C" },
    { id: "4", to: "/items/4", src: itemImage1, alt: "商品D" },
    { id: "5", to: "/items/5", src: itemImage1, alt: "商品E" },
    { id: "6", to: "/items/6", src: itemImage1, alt: "商品F" },
    { id: "7", to: "/items/7", src: itemImage1, alt: "商品G" },
  ];

  return (
    <>
      <CheckoutCompleteMainView />
      <CouponApplicableItemList items={couponApplicableItems} />
      <RecommendItemListForYou />
    </>
  );
};
