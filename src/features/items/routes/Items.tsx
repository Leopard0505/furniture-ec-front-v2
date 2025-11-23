import { useEffect, useState } from 'react';
import { ItemsComponent } from "../components/ItemsComponent/ItemsComponent";
import { useQueryParams } from '../../shared/hooks/useQueryParams';
import itemImage1 from '@/assets/images/item_1.png';
import { ItemProps } from '../components/Item/Item';

export default function Items() {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);
  const { getQueryParamPage, getQueryParamSort, getQueryParamOrder } = useQueryParams();
  const queryParamPage: number = getQueryParamPage();
  const queryParamSort: string | null = getQueryParamSort();
  const queryParamOrder: string | null = getQueryParamOrder();

  useEffect(() => {
    // TODO: 商品一覧を取得
    const response = {
      currentPage: 1,
      totalPage: 10,
      items: [
        {
          id: 1,
          name: '商品名が入ります',
          price: 1000,
          src: itemImage1,
          alt: '商品画像',
          description: '商品説明や値段が入ります。商品説明や値段が入ります。',
          category: 'カテゴリ名',
          review: '4.5',
        },
      ],
    };
    const items = Array.from({ length: 20 }).map((_, index) => ({ ...response.items[0], id: index + 1 }));
    setItems(items);
    setCurrentPage(queryParamPage);
    setTotalPages(response.totalPage);
  }, [queryParamOrder, queryParamPage, queryParamSort]);

  return (
    <ItemsComponent
      items={items}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  )
}
