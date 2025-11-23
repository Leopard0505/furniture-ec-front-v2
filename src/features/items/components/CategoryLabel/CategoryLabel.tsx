
import { KeyboardEvent } from 'react';
import { useKeyupFunction } from '../../../shared/hooks/useKeyupFunction';
import styles from './CategoryLabel.module.scss';

interface CategoryLabelProps {
  text: string;
  pressed?: boolean;
  onClick?: () => void;
}

export function CategoryLabel(props: CategoryLabelProps) {
  const { handleEnterKey } = useKeyupFunction();

  return (
    <span
      className={styles.category__label}
      aria-pressed={props.pressed}
      onClick={props.onClick}
      onKeyUp={(e: KeyboardEvent) => handleEnterKey(e, () => props.onClick && props.onClick())}
    >
      {props.text}
    </span>
  );
}
