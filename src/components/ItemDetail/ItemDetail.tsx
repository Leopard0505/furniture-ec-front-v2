import styles from './ItemDetail.module.scss';
import { Button } from '../Button/Button';
import { Item } from '../Item/Item';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { CustomerReview } from '../CustomerReview/CustomerReview';

type Image = {
  url: string;
  alt: string;
};

type Category = {
  id: number;
  name: string;
};

type Brand = {
  id: number;
  name: string;
};

type Seller = {
  id: number;
  name: string;
  about: string;
};

type Shipping = {
  method: string;
  fee: string;
  area: string;
  days: number;
};

type Material = {
  id: number;
  name: string;
};

type Handling = {
  return: boolean;
  returnDays: string;
  returnCondition: string;
  returnFee: string;
  cancellation: boolean;
  cancellationDays: string;
};

type ReviewItem = {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  rating: string;
  comment: string;
  createdAt: string;
};

type Reviews = {
  average: string;
  count: number;
  items: ReviewItem[];
};

type TogetherItem = {
  id: number;
  name: string;
  image: Image;
  review: string;
  description: string;
};

type Item = {
  id: number;
  image: Image;
  subImages: Image[];
  category: Category;
  brand: Brand;
  name: string;
  price: string;
  stock: boolean;
  overview: string;
  description: string;
  width: string;
  height: string;
  weight: string;
  seller: Seller;
  shipping: Shipping;
  materials: Material[];
  handling: Handling;
  reviews: Reviews;
  togetherItems: TogetherItem[];
};

type ItemDetailProps = {
  item: Item;
};

export default function ItemDetail({ item }: ItemDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.imageSection}>
          <img src={item.image.url} alt={item.image.alt} className={styles.mainImage} />
          <div className={styles.subImages}>
            {item.subImages.map((subImage, index) => (
              <img key={index} src={subImage.url} alt={subImage.alt} className={styles.subImage} />
            ))}
          </div>
        </div>
        <div className={styles.infoSection}>
          <p className={styles.category}>{item.category.name}</p>
          <h1 className={styles.title}>{item.name}</h1>
          <p className={styles.price}>{item.price}</p>
          <p className={styles.stock}>{item.stock ? "在庫あり" : "在庫なし"}</p>
          <Button className={styles.buyButton}>購入する</Button>
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
              price={relatedItem.review}
              src={relatedItem.image.url}
              alt={relatedItem.image.alt}
              description={relatedItem.description}
              category={item.category.name}
              review={relatedItem.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
