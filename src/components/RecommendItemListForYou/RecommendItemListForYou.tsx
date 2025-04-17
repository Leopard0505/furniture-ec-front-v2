import { useState } from "react";
import { Item } from "../Item/Item";
import { SectionTitle } from "../SectionTitle/SectionTitle"
import styles from "./RecommendItemListForYou.module.scss"
import { RecommendedItem } from "../../interfaces/recommendedItem.type";
import itemImage1 from '@/assets/images/item_1.png';

export function RecommendItemListForYou() {
  const [recommendedItems,] = useState<RecommendedItem[]>(
    [
      {
        id: 1,
        name: '商品1',
        image: {
          url: itemImage1,
          alt: '商品1の画像',
        },
        review: '5.0',
        description: '商品1の説明文',
      },
      {
        id: 2,
        name: '商品2',
        image: {
          url: itemImage1,
          alt: '商品2の画像',
        },
        review: '4.5',
        description: '商品2の説明文',
      },
      {
        id: 3,
        name: '商品3',
        image: {
          url: itemImage1,
          alt: '商品3の画像',
        },
        review: '4.0',
        description: '商品3の説明文',
      },
      {
        id: 4,
        name: '商品4',
        image: {
          url: itemImage1,
          alt: '商品4の画像',
        },
        review: '3.5',
        description: '商品4の説明文',
      }
    ]
  );

  return (
    <div className={styles.section}>
      <SectionTitle text="閲覧履歴に基づくおすすめ商品" />
      <div className={styles.content}>
        {recommendedItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            src={item.image.url}
            alt={item.image.alt}
            description={item.description}
            review={item.review}
          />
        ))}
      </div>
    </div>
  );
}
