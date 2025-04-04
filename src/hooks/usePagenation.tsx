import { useCallback, useEffect, useState } from "react";
import { useQueryParams } from "./useQueryParams";

interface PagenationProps {
  currentPage: number;
  totalPages: number;
}

const MAX_VISIBLE_PAGES = 5;
export const QUERY_PARAM_PAGE = 'page';

export const usePagenation = (props: PagenationProps) => {
  const [pages, setPages] = useState<number[]>([]);
  const { updateSearchParams } = useQueryParams();

  const handlePrevPage = () => {
    const page = props.currentPage - 1;
    updateSearchParams(QUERY_PARAM_PAGE, page.toString());
  };

  const handleNextPage = () => {
    const page = props.currentPage + 1;
    updateSearchParams(QUERY_PARAM_PAGE, page.toString());
  };

  const handleSelectPage = (page: number) => {
    updateSearchParams(QUERY_PARAM_PAGE, page.toString());
  };

  const calculatePageNumbers = useCallback(() => {
    let startPage = Math.max(1, props.currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
    const endPage = Math.min(props.totalPages, startPage + MAX_VISIBLE_PAGES - 1);

    if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
      startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
    }

    return {
      startPage,
      endPage,
    };
  }, [props.currentPage, props.totalPages]);

  useEffect(() => {
    const { startPage, endPage } = calculatePageNumbers();
    setPages(Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
  }, [calculatePageNumbers]);

  return {
    pages,
    handlePrevPage,
    handleNextPage,
    handleSelectPage,
  };
};
