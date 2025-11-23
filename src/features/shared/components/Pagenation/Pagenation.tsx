import { KeyboardEvent, useCallback } from 'react';
import styles from './Pagenation.module.scss';
import { usePagenation } from '../../hooks/usePagenation';
import classNames from 'classnames';
import { useKeyupFunction } from '../../hooks/useKeyupFunction';

interface PagenationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagenation = (props: PagenationProps) => {
  const { pages, handlePrevPage, handleNextPage, handleSelectPage } = usePagenation({
    currentPage: props.currentPage,
    totalPages: props.totalPages,
  });
  const { handleEnterKey } = useKeyupFunction();

  const renderPageNumbers = useCallback(() => {
    return pages.map((page) => (
      <div
        key={page}
        className={classNames(styles.pagenation__item, props.currentPage === page ? styles.active : '')}
        onClick={() => handleSelectPage(page)}
        onKeyUp={(e: KeyboardEvent) => handleEnterKey(e, () => handleSelectPage(page))}
      >
        {page}
      </div>
    ));
  }, [pages, props.currentPage, handleSelectPage, handleEnterKey]);

  return (
    <div className={styles.pagenation}>
      <div
        className={styles.pagenation__prev}
        onClick={() => props.currentPage > 1 && handlePrevPage()}
        onKeyUp={(e: KeyboardEvent) => handleEnterKey(e, () => props.currentPage > 1 && handlePrevPage())}
      >
        &lt;
      </div>
      {renderPageNumbers()}
      <div
        className={styles.pagenation__next}
        onClick={() => props.currentPage < props.totalPages && handleNextPage()}
        onKeyUp={(e: KeyboardEvent) => handleEnterKey(e, () =>props.currentPage < props.totalPages && handleNextPage())}
      >
        &gt;
      </div>
    </div>
  );
};
