import { Link } from 'react-router';
import styles from './LinkList.module.scss';
import classNames from 'classnames';

interface LinkListProps {
  items: { id: string, to: string, text: string }[];
  className?: string;
  secondary?: boolean;
}

export function LinkList(props: LinkListProps) {
  const convertClassName = classNames(styles.link__list, props.className);
  const convertClassNameItem = classNames(styles.link__list__item, props.secondary ? styles.secondary : null);

  return (
    <div className={convertClassName}>
      {props.items.map((item) => (
        <div className={convertClassNameItem} key={item.id}>
          <Link to={item.to} className={styles.link}>{item.text}</Link>
        </div>
      ))}
    </div>
  );
}
