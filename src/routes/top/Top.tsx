import { MainVisual } from "../../components/MainVisual/MainVisual";
import { CouponApplicableItemList } from "../../components/CouponApplicableItemList/CouponApplicableItemList";
import { RecommendItemList } from "../../components/RecommendItemList/RecommendItemList";
import { SearchByCategory } from "../../components/SearchByCategory/SearchByCategory";

import itemImage1 from '@/assets/images/item_1.png';

export default function Top() {

  // クーポン利用可能な商品
  // TODO: APIから取得
  const couponApplicableItems = [
    { to: "/items/1", src: itemImage1, alt: "商品A" },
    { to: "/items/2", src: itemImage1, alt: "商品B" },
    { to: "/items/3", src: itemImage1, alt: "商品C" },
    { to: "/items/4", src: itemImage1, alt: "商品D" },
    { to: "/items/5", src: itemImage1, alt: "商品E" },
    { to: "/items/6", src: itemImage1, alt: "商品F" },
    { to: "/items/7", src: itemImage1, alt: "商品G" },
  ];

  // おすすめ商品
  // TODO: APIから取得
  const recommendItems = [
    { to: "/items/1", src: itemImage1, alt: "商品A" },
    { to: "/items/2", src: itemImage1, alt: "商品B" },
    { to: "/items/3", src: itemImage1, alt: "商品C" },
    { to: "/items/4", src: itemImage1, alt: "商品D" },
    { to: "/items/5", src: itemImage1, alt: "商品E" },
    { to: "/items/6", src: itemImage1, alt: "商品F" },
    { to: "/items/7", src: itemImage1, alt: "商品G" },
  ];

  // カテゴリから探す
  // TODO: APIから取得
  const searchByCategoryItems = [
    { to: "/items/1", src: itemImage1, alt: "商品A" },
    { to: "/items/2", src: itemImage1, alt: "商品B" },
    { to: "/items/3", src: itemImage1, alt: "商品C" },
    { to: "/items/4", src: itemImage1, alt: "商品D" },
    { to: "/items/5", src: itemImage1, alt: "商品E" },
    { to: "/items/6", src: itemImage1, alt: "商品F" },
    { to: "/items/7", src: itemImage1, alt: "商品G" },
    { to: "/items/8", src: itemImage1, alt: "商品H" },
    { to: "/items/9", src: itemImage1, alt: "商品I" },
    { to: "/items/10", src: itemImage1, alt: "商品J" },
    { to: "/items/11", src: itemImage1, alt: "商品K" },
    { to: "/items/12", src: itemImage1, alt: "商品L" },
  ]

  return (
    <main>
      <MainVisual />
      <CouponApplicableItemList items={couponApplicableItems} />
      <RecommendItemList items={recommendItems} />
      <SearchByCategory items={searchByCategoryItems} />
    </main>
  )
}
