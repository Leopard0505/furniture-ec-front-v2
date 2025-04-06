
import { PATH } from '../../constants/path';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import styles from './UserGuideButtonForRightButtonContainer.module.scss';

export function UserGuideButtonForRightButtonContainer() {
  return (
    <div>
      <ButtonLink className={styles.user__guide__button} to={PATH.GUIDE()}>
        ご利用<br />ガイド
      </ButtonLink>
    </div>
  )
}
