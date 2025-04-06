import { PATH } from '../../constants/path';
import { ButtonLink } from '../ButtonLink/ButtonLink';

import styles from './UserGuideButtonForHeader.module.scss';

export function UserGuideButtonForHeader() {
  return (
    <div className={styles.user__guide__button__container}>
      <ButtonLink className={styles.user__guide__button} to={PATH.GUIDE()} text='ご利用ガイド' white onClick={() => { }} />
    </div>
  );
}
