import { useState } from "react";
import { useQueryParams } from "./useQueryParams";
import { QUERY_PARAM_PAGE } from "./usePagenation";

type SortOrder = 'asc' | 'desc' | '';

interface ItemSort {
  sort: string;
  order: SortOrder;
}

export const QUERY_PARAM_SORT = 'sort';
export const QUERY_PARAM_ORDER = 'order';

export const useItemSort = () => {
  const [itemSort, setItemSort] = useState<ItemSort | null>(null);
  const { updateSearchParams } = useQueryParams();

  const handleSetItemSort = (sort: string, order: SortOrder) => {
    setItemSort({ sort, order });
  }

  const handleSort = () => {
    if (itemSort === null) {
      updateSearchParams(QUERY_PARAM_SORT, null);
      updateSearchParams(QUERY_PARAM_ORDER, null);
    } else {
      updateSearchParams(QUERY_PARAM_SORT, itemSort.sort);
      updateSearchParams(QUERY_PARAM_ORDER, itemSort.order);
    }
    // 1ページ目からのデータを取得したいので、1ページ目に戻す
    updateSearchParams(QUERY_PARAM_PAGE, '1');
  }

  const handleClearSort = () => {
    setItemSort(null);
  }

  return {
    handleSetItemSort,
    handleSort,
    handleClearSort,
  }
}
