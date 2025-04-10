//Outletをインポート
import { Outlet } from 'react-router';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ModalCookieConsent } from '../components/ModalCookieConsent/ModalCookieConsent';
import { ModalItemAddedToCart } from '../components/ModalItemAddedToCart/ModalItemAddedToCart';

export default function Layout() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ModalCookieConsent />
      <ModalItemAddedToCart />
    </>
  )
}
