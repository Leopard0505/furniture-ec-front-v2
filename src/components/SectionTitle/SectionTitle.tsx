import classNames from 'classnames';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
}

export function SectionTitle(props: SectionTitleProps) {
  const convertSizeStyle = props.size ? styles[props.size] : null;
  const convertClassName = classNames(styles.section__title, convertSizeStyle);

  return (
    <h3 className={convertClassName}>
      {props.text}
    </h3>
  );
}
