import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import ItemDetail from './ItemDetail';
import * as HookUseCart from '../../hooks/useCart';

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
      items: []
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
    togetherItems: [
      {
        id: 2,
        name: "関連商品",
        image: { url: "https://example.com/related.jpg", alt: "関連商品画像" },
        description: "関連商品の説明",
        review: "4.0"
      }
    ]
  };

  renderWithRouter(<ItemDetail item={item} />);

  expect(screen.getByText("商品名")).toBeInTheDocument();
  expect(screen.getByText("￥1,000")).toBeInTheDocument();
  expect(screen.getByText("商品の概要")).toBeInTheDocument();
  expect(screen.getByText("カテゴリ名")).toBeInTheDocument();
  expect(screen.getByText("在庫あり")).toBeInTheDocument();
  expect(screen.getByText("商品の説明")).toBeInTheDocument();
  expect(screen.getByText("販売者についての説明")).toBeInTheDocument();
  expect(screen.getByText("配送方法: 配送方法")).toBeInTheDocument();
  expect(screen.getByText("送料: 無料")).toBeInTheDocument();
  expect(screen.getByText("配送エリア: 全国")).toBeInTheDocument();
  expect(screen.getByText("配送日数: 3日")).toBeInTheDocument();
  expect(screen.getByText("関連商品")).toBeInTheDocument();
});

test('handles add to cart button click', () => {
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
      items: []
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
    togetherItems: [
      {
        id: 2,
        name: "関連商品",
        image: { url: "https://example.com/related.jpg", alt: "関連商品画像" },
        description: "関連商品の説明",
        review: "4.0"
      }
    ]
  };

  const addToCartMock = jest.fn();
  jest.spyOn(HookUseCart, 'useCart').mockImplementation(() => ({
    cartItems: [],
    cartItemCount: 0,
    lastAddedItem: null,
    addToCart: addToCartMock,
    removeFromCart: jest.fn(),
  }));

  renderWithRouter(<ItemDetail item={item} />);

  const button = screen.getByText("購入する");
  fireEvent.click(button);

  expect(addToCartMock).toHaveBeenCalledTimes(1);
});
