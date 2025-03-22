import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './SearchByCategory.module.scss';
import { LinkList } from '../LinkList/LinkList';

interface SearchByCategoryProps {
  items: { to: string, src: string, alt: string }[];
}

export function SearchByCategory(props: SearchByCategoryProps) {
  const [iconItems,] = useState(props.items.slice(0, 6));
  const [moreItems,] = useState(props.items.slice(6, 12));

  return (
    <div className={styles.search_by_category__container}>
      <SectionTitle text="カテゴリから探す" />
      <div className={styles.search_by_category__list}>
        {iconItems.map((item, index) => (
          <Link className={styles.search_by_category__list__item} key={index} to={item.to}>
            <img className={styles.search_by_category__list__item__image} src={item.src} alt={item.alt} />
            <div className={styles.search_by_category__list__item__name}>{item.alt}</div>
          </Link>
        ))}
      </div>
      <LinkList items={moreItems} />
    </div>
  );
}
