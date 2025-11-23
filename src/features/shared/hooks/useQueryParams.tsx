import { useSearchParams } from "react-router";
import { QUERY_PARAM_PAGE } from "./usePagenation";
import { QUERY_PARAM_SORT, QUERY_PARAM_ORDER } from "../../items/hooks/useItemSort";

export const QUERY_PARAM_REVIEW_SCORE = 'review_score';
export const QUERY_PARAM_PRODUCT_CONDITION = 'product_condition';
export const QUERY_PARAM_STOCK = 'stock';
export const QUERY_PARAM_SHIPPING = 'shipping';
export const QUERY_PARAM_MIN_PRICE = 'min_price';
export const QUERY_PARAM_MAX_PRICE = 'max_price';
export const QUERY_PARAM_CATEGORY = 'category';

export interface UpdateMultipleSearchParams {
  key: string;
  value: string | null;
}

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParam = (key: string) => {
    return searchParams.get(key);
  };

  const updateSearchParams = (key: string, value: string | null) => {
    setSearchParams((prevSearchParams) => {
      if (value === null) {
        prevSearchParams.delete(key);
      } else {
        prevSearchParams.set(key, value);
      }
      return prevSearchParams;
    });
  };

  const updateMultipleSearchParams = (updates: UpdateMultipleSearchParams[]): Promise<void> => {
    return new Promise((resolve) => {
      const newSearchParams = new URLSearchParams(searchParams);
      updates.forEach(({ key, value }) => {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, value);
        }
      });
      setSearchParams(newSearchParams);
      resolve();
    });
  };

  const getQueryParamPage = () => {
    const page = getQueryParam(QUERY_PARAM_PAGE);
    if (!page) return 1;
    const parsedPage = parseInt(page);
    return isNaN(parsedPage) || parsedPage <= 0 ? 1 : parsedPage;
  };

  const getQueryParamSort = () => {
    return getQueryParam(QUERY_PARAM_SORT);
  };

  const getQueryParamOrder = () => {
    return getQueryParam(QUERY_PARAM_ORDER);
  };

  const getQueryParamReviewScore = () => {
    return getQueryParam(QUERY_PARAM_REVIEW_SCORE);
  };

  const getQueryParamCondition = () => {
    return getQueryParam(QUERY_PARAM_PRODUCT_CONDITION);
  };

  const getQueryParamStock = () => {
    return getQueryParam(QUERY_PARAM_STOCK);
  };

  const getQueryParamShipping = () => {
    return getQueryParam(QUERY_PARAM_SHIPPING);
  };

  const getQueryParamMinPrice = () => {
    return getQueryParam(QUERY_PARAM_MIN_PRICE);
  };

  const getQueryParamMaxPrice = () => {
    return getQueryParam(QUERY_PARAM_MAX_PRICE);
  };

  const getQueryParamCategory = () => {
    return getQueryParam(QUERY_PARAM_CATEGORY);
  };

  return {
    updateSearchParams,
    updateMultipleSearchParams,
    getQueryParamPage,
    getQueryParamSort,
    getQueryParamOrder,
    getQueryParamReviewScore,
    getQueryParamCondition,
    getQueryParamStock,
    getQueryParamShipping,
    getQueryParamMinPrice,
    getQueryParamMaxPrice,
    getQueryParamCategory,
  };
};
