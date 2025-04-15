import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import ItemDetail from './ItemDetail';

test('renders item details', () => {
  const item = {
    id: 1,
    image: { url: "https://example.com/image.jpg", alt: "商品画像" },
    subImages: [],
    name: "商品名",
    price: 1000,
    overview: "商品の概要",
    category: { id: 1, name: "カテゴリ名" },
    brand: { id: 1, name: "ブランド名" },
    width: "45cm",
    height: "100cm",
    weight: "20kg",
    stock: true,
    description: "商品の説明",
    seller: { id: 1, name: "販売者名", about: "販売者についての説明" },
    shipping: { method: "配送方法", fee: "無料", area: "全国", days: 3 },
    reviews: {
      average: "4.5",
      count: 10,
      items: [
        {
          id: 1,
          user: { id: 1, name: "ユーザー1", avatar: "https://example.com/avatar1.jpg" },
          rating: "5",
          comment: "素晴らしい商品です！",
          createdAt: "2025-04-01"
        },
        {
          id: 2,
          user: { id: 2, name: "ユーザー2", avatar: "https://example.com/avatar2.jpg" },
          rating: "4",
          comment: "満足しています。",
          createdAt: "2025-04-02"
        }
      ]
    },
    tags: [],
    materials: [{ id: 1, name: "木材" }],
    handling: {
      return: true,
      returnDays: "7日以内",
      returnCondition: "未使用",
      returnFee: "着払い",
      cancellation: true,
      cancellationDays: "3日以内"
    },
    togetherItems: []
  };

  renderWithRouter(<ItemDetail item={item} />);

  expect(screen.getByText("商品名")).toBeInTheDocument();
  expect(screen.getByText("￥1,000")).toBeInTheDocument();
  expect(screen.getByText("商品の概要")).toBeInTheDocument();
  expect(screen.getByText("カテゴリ名")).toBeInTheDocument();
  expect(screen.getByText("在庫あり")).toBeInTheDocument();
  expect(screen.getByText("商品の説明")).toBeInTheDocument();
});
