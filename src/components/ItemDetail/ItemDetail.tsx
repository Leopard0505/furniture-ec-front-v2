import styles from './ItemDetail.module.scss';
import { Button } from '../Button/Button';
import { Item } from '../Item/Item';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { CustomerReview } from '../CustomerReview/CustomerReview';
import type { ItemType } from './ItemDetail.type';
import { ImageViewer } from '../ImageViewer/ImageViewer';
import { useCart } from '../../hooks/useCart';
import { formattedPrice } from '../../utils/price';

type ItemDetailProps = {
  item: ItemType;
};

export default function ItemDetail({ item }: ItemDetailProps) {
  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.imageSection}>
          <ImageViewer mainView={item.image} subView={item.subImages} />
        </div>
        <div className={styles.infoSection}>
          <p className={styles.category}>{item.category.name}</p>
          <h1 className={styles.title}>{item.name}</h1>
          <p className={styles.price}>{formattedPrice(item.price)}</p>
          <p className={styles.stock}>{item.stock ? "在庫あり" : "在庫なし"}</p>
          <Button
            className={styles.buyButton}
            onClick={() => addToCart({
              id: item.id,
              quantity: 1,
              name: item.name,
              price: item.price,
              image: item.image,
              variation: {
                size: "M",
                color: "red",
              },
              stock: item.stock,
            })}>
            購入する
          </Button>
        </div>
      </div>
      <div className={styles.detailsSection}>
        <SectionTitle text="商品詳細" size="medium" />
        <p>{item.overview}</p>
      </div>
      <div className={styles.detailsSection}>
        <SectionTitle text="商品説明" size="medium" />
        <p>{item.description}</p>
      </div>
      <div className={styles.detailsSection}>
        <SectionTitle text="販売元について" size="medium" />
        <p>{item.seller.about}</p>
      </div>
      <div className={styles.detailsSection}>
        <SectionTitle text="配送について" size="medium" />
        <p>配送方法: {item.shipping.method}</p>
        <p>送料: {item.shipping.fee}</p>
        <p>配送エリア: {item.shipping.area}</p>
        <p>配送日数: {item.shipping.days}日</p>
      </div>
      <div className={styles.reviewsSection}>
        <SectionTitle text="カスタマーレビュー" />
        <CustomerReview reviews={item.reviews} />
      </div>
      <div className={styles.relatedItemsSection}>
        <SectionTitle text="よく一緒に購入されている商品" />
        <div className={styles.relatedItems}>
          {item.togetherItems.map((relatedItem) => (
            <Item
              key={relatedItem.id}
              id={relatedItem.id}
              name={relatedItem.name}
              src={relatedItem.image.url}
              alt={relatedItem.image.alt}
              description={relatedItem.description}
              review={relatedItem.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
