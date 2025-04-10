import { Cart as CartComponent } from '../../components/Cart/Cart';
import itemImage1 from '@/assets/images/item_1.png';

export default function Cart() {
  const recommendedItems = [
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
  ];

  return (
    <CartComponent recommendedItems={recommendedItems} />
  );
}
