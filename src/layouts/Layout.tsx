//Outletをインポート
import { Outlet } from 'react-router';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ModalCookieConsent } from '../components/ModalCookieConsent/ModalCookieConsent';

import styles from './Layout.module.scss';
import { UserGuideButtonForRightButtonContainer } from '../components/UserGuideButtonForRightButtonContainer/UserGuideButtonForRightButtonContainer';

export default function Layout() {

  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
      <div className={styles.right__button__container}>
        <UserGuideButtonForRightButtonContainer />
      </div>
      <ModalCookieConsent />
    </div>
  )
}
