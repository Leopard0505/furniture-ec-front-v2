import classNames from 'classnames';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  text: string;
  id?: string;
  size?: 'small' | 'medium' | 'large';
  secondary?: boolean;
}

export function SectionTitle(props: SectionTitleProps) {
  const convertSizeStyle = props.size ? styles[props.size] : null;
  const convertClassName = classNames(styles.section__title, convertSizeStyle, props.secondary ? styles.secondary : null);

  return (
    <h3 className={convertClassName} id={props.id}>
      {props.text}
    </h3>
  );
}
