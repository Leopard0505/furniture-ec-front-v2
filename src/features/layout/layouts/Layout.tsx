//Outletをインポート
import { Outlet } from 'react-router';

import Header from '../../shared/components/Header/Header';
import Footer from '../../shared/components/Footer/Footer';
import { ModalCookieConsent } from '../../shared/components/ModalCookieConsent/ModalCookieConsent';
import { ModalItemAddedToCart } from '../../cart/components/ModalItemAddedToCart/ModalItemAddedToCart';

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
