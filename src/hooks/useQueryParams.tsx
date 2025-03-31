import { useSearchParams } from "react-router";
import { QUERY_PARAM_PAGE } from "./usePagenation";
import { QUERY_PARAM_SORT, QUERY_PARAM_ORDER } from "./useItemSort";

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

  return {
    updateSearchParams,
    getQueryParamPage,
    getQueryParamSort,
    getQueryParamOrder,
  };
};
