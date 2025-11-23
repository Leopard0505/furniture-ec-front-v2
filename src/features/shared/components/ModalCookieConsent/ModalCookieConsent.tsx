import styles from './ModalCookieConsent.module.scss';
import { Button } from '../Button/Button';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import { Portal } from '../Portal/Portal';

export function ModalCookieConsent() {
  const { isModalOpen, closeModal, handleRequestClose } = useCookieConsent();

  if (!isModalOpen) {
    return <></>;
  }

  return (
    <Portal>
      <div className={styles.modal__cookie__consent}>
        <div className={styles.modal__cookie__consent__text__container}>
          <p className={styles.modal__cookie__consent__title}>
            あなたのプライバシー
          </p>
          <p className={styles.modal__cookie__consent__text}>
            「同意する」をクリックすると、このサイトがデバイスに Cookie を保存し、 Cookie ポリシーに従って情報を公開することに同意したことになります。
          </p>
        </div>
        <div className={styles.modal__cookie__consent__button__container}>
          <Button text='同意しない' onClick={() => closeModal()} />
          <Button text='同意する' onClick={() => handleRequestClose()} />
        </div>
      </div>
    </Portal>
  )
}
