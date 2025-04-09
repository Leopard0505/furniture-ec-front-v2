import ItemDetail from '../../../components/ItemDetail/ItemDetail';
import itemImage1 from '@/assets/images/item_1.png';

export default function ItemId() {
  const item = {
    id: 1,
    image: {
      url: "https://placehold.co/400x400",
      alt: "商品画像"
    },
    subImages: [
      { url: "https://placehold.co/120x120", alt: "商品画像1" },
      { url: "https://placehold.co/120x120", alt: "商品画像2" },
      { url: "https://placehold.co/120x120", alt: "商品画像3" }
    ],
    category: { id: 1, name: "カテゴリ名" },
    brand: { id: 1, name: "ブランド名" },
    name: "商品名が入ります商品名が入ります商品名が入ります",
    price: "33,880円（税込）",
    stock: true,
    overview: "商品の概要が入ります。",
    description: "商品の説明が入ります。商品の説明や値段が入ります。商品の説明や値段が入ります。",
    width: "45cm",
    height: "100cm",
    seller: { id: 1, name: "〇〇株式会社", about: "販売元についての説明が入ります。" },
    shipping: { method: "配送方法", fee: "無料", area: "全国", days: 3 },
    materials: [{ id: 1, name: "木製" }],
    weight: "5.3kg",
    handling: {
      return: true,
      returnDays: "7日以内",
      returnCondition: "未使用",
      returnFee: "着払い",
      cancellation: true,
      cancellationDays: "3日以内"
    },
    reviews: {
      average: "4.7",
      count: 10,
      items: [
        {
          id: 1,
          user: { id: 1, name: "匿名ユーザー", avatar: "https://placehold.co/40x40" },
          rating: "5",
          comment: "商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。",
          createdAt: "2023-01-01"
        },
        {
          id: 2,
          user: { id: 2, name: "匿名ユーザー", avatar: "https://placehold.co/40x40" },
          rating: "4",
          comment: "商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。",
          createdAt: "2023-01-02"
        },
        {
          id: 3,
          user: { id: 3, name: "匿名ユーザー", avatar: "https://placehold.co/40x40" },
          rating: "3",
          comment: "商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。商品のレビューが入ります。",
          createdAt: "2023-01-03"
        }
      ]
    },
    togetherItems: [
      {
        id: 2,
        name: "商品名が入ります",
        image: { url: itemImage1, alt: "関連商品画像" },
        review: "4.5",
        description: "関連商品の説明が入ります。"
      },
      {
        id: 3,
        name: "商品名が入ります",
        image: { url: itemImage1, alt: "関連商品画像2" },
        review: "4.0",
        description: "関連商品の説明が入ります。"
      }
    ]
  };

  return <ItemDetail item={item} />;
}
