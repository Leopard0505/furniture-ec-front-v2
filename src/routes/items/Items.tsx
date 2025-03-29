import { useEffect, useState } from 'react';
import { ItemsComponent } from "../../components/ItemsComponent/ItemsComponent";
import { useQueryParams } from '../../hooks/useQueryParams';

export default function Items() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);
  const { getQueryParamPage } = useQueryParams();
  const queryParamPage: number = getQueryParamPage();

  useEffect(() => {
    // TODO: 商品一覧を取得
    const response = {
      currentPage: 1,
      totalPage: 10,
      items: [
        {
          id: 1,
          name: '商品1',
          price: 1000,
        },
      ],
    };
    setCurrentPage(queryParamPage);
    setTotalPages(response.totalPage);
  }, [queryParamPage]);

  return (
    <ItemsComponent
      currentPage={currentPage}
      totalPages={totalPages}
    />
  )
}
