//Outletをインポート
import { Outlet } from 'react-router';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ModalCookieConsent } from '../components/ModalCookieConsent/ModalCookieConsent';

export default function Layout() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ModalCookieConsent />
    </>
  )
}
