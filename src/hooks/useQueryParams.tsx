import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const newQueryParams: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      newQueryParams[key] = value;
    });
    setQueryParams(newQueryParams);
  }, [searchParams]);

  const getQueryParam = (key: string) => {
    return searchParams.get(key);
  };

  const getQueryParamPage = () => {
    const page = getQueryParam('page');
    return page ? parseInt(page as string) : 1;
  };

  const updateSearchParams = (key: string, value: string) => {
    setSearchParams({ ...queryParams, [key]: value });
  };

  return {
    queryParams,
    getQueryParamPage,
    updateSearchParams,
  };
};
