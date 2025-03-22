import { MainVisual } from "../../components/MainVisual/MainVisual";
import { CouponApplicableItemList } from "../../components/CouponApplicableItemList/CouponApplicableItemList";
import { RecommendItemList } from "../../components/RecommendItemList/RecommendItemList";
import { SearchByCategory } from "../../components/SearchByCategory/SearchByCategory";
import { RankingList } from "../../components/RankingList/RankingList";

import itemImage1 from '@/assets/images/item_1.png';
import rankingItemImage1 from '@/assets/images/ranking-item_1.png';

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

  // ランキング
  // TODO: APIから取得
  const rankingItems = [
    { to: "/items/1", src: rankingItemImage1, alt: "商品A", rank: 1, name: "商品A", description: "商品Aの説明文", price: "¥1000" },
    { to: "/items/2", src: rankingItemImage1, alt: "商品B", rank: 2, name: "商品B", description: "商品Bの説明文", price: "¥2000" },
    { to: "/items/3", src: rankingItemImage1, alt: "商品C", rank: 3, name: "商品C", description: "商品Cの説明文", price: "¥3000" },
    { to: "/items/4", src: rankingItemImage1, alt: "商品D", rank: 4, name: "商品D", description: "商品Dの説明文", price: "¥4000" },
    { to: "/items/5", src: rankingItemImage1, alt: "商品E", rank: 5, name: "商品E", description: "商品Eの説明文", price: "¥5000" },
    { to: "/items/6", src: rankingItemImage1, alt: "商品F", rank: 6, name: "商品F", description: "商品Fの説明文", price: "¥6000" },
  ]

  return (
    <main>
      <MainVisual />
      <CouponApplicableItemList items={couponApplicableItems} />
      <RecommendItemList items={recommendItems} />
      <SearchByCategory items={searchByCategoryItems} />
      <RankingList items={rankingItems} />
    </main>
  )
}
