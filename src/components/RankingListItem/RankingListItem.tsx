import { Link } from 'react-router-dom';
import styles from './RankingListItem.module.scss';

export interface RankingListItemProps {
  rank: number;
  to: string;
  src: string;
  alt: string;
  name: string;
  description: string;
  price: string;
}

export function RankingListItem(props: RankingListItemProps) {
  return (
    <Link className={styles.ranking__list__item} to={props.to}>
      <div className={styles.ranking__list__item__image__container}>
        <img className={styles.ranking__list__item__image} src={props.src} alt={props.alt} />
      </div>
      <div className={styles.ranking__list__item__info}>
        <div className={styles.ranking__list__item__info__ranking}>{props.rank}位</div>
        <div className={styles.ranking__list__item__info__name}>{props.name}</div>
        <div className={styles.ranking__list__item__info__description}>{props.description}</div>
        <div className={styles.ranking__list__item__info__price}>{props.price}</div>
      </div>
    </Link>
  );
}
