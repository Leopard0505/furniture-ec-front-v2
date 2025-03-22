import { RankingListItem, RankingListItemProps } from '../RankingListItem/RankingListItem';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './RankingList.module.scss';

interface RankingListProps {
  items: RankingListItemProps[];
}

export function RankingList(props: RankingListProps) {

  return (
    <div className={styles.ranking__container}>
      <SectionTitle text='ランキング' />
      <div className={styles.ranking__list}>
        {props.items.map((item, index) => (
          <RankingListItem
            key={index}
            rank={item.rank}
            to={item.to}
            src={item.src}
            alt={item.alt}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
