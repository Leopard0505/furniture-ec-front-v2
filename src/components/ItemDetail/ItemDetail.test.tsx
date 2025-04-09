import { render, screen } from '@testing-library/react';
import ItemDetail from './ItemDetail';

test('renders item details', () => {
  const item = {
    image: { url: "https://example.com/image.jpg", alt: "商品画像" },
    name: "商品名",
    price: "1000円",
    overview: "商品の概要",
    category: { name: "カテゴリ名" },
    brand: { name: "ブランド名" },
    width: "45cm",
    height: "100cm",
    weight: "20kg",
    stock: true,
    description: "商品の説明"
  };

  render(<ItemDetail item={item} />);

  expect(screen.getByText("商品名")).toBeInTheDocument();
  expect(screen.getByText("1000円")).toBeInTheDocument();
  expect(screen.getByText("商品の概要")).toBeInTheDocument();
  expect(screen.getByText("カテゴリ: カテゴリ名")).toBeInTheDocument();
  expect(screen.getByText("ブランド: ブランド名")).toBeInTheDocument();
  expect(screen.getByText("サイズ: 45cm x 100cm")).toBeInTheDocument();
  expect(screen.getByText("重量: 20kg")).toBeInTheDocument();
  expect(screen.getByText("在庫: あり")).toBeInTheDocument();
  expect(screen.getByText("商品の説明")).toBeInTheDocument();
});
