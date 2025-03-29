import styles from './Pagenation.module.scss';
import { usePagenation } from '../../hooks/usePagenation';
import classNames from 'classnames';
import { useCallback } from 'react';

interface PagenationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagenation = (props: PagenationProps) => {
  const { pages, handlePrevPage, handleNextPage, handleSelectPage } = usePagenation({
    currentPage: props.currentPage,
    totalPages: props.totalPages,
  });

  const renderPageNumbers = useCallback(() => {
    return pages.map((page) => (
      <div
        key={page}
        className={classNames(styles.pagenation__item, props.currentPage === page ? styles.active : '')}
        onClick={() => handleSelectPage(page)}
      >
        {page}
      </div>
    ));
  }, [pages, props.currentPage, handleSelectPage]);

  return (
    <div className={styles.pagenation}>
      <div
        className={styles.pagenation__prev}
        onClick={() => props.currentPage > 1 && handlePrevPage()}
      >
        &lt;
      </div>
      {renderPageNumbers()}
      <div
        className={styles.pagenation__next}
        onClick={() => props.currentPage < props.totalPages && handleNextPage()}
      >
        &gt;
      </div>
    </div>
  );
};
