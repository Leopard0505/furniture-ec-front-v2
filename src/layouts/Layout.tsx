//Outletをインポート
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useMode } from '../hooks/useMode';

export default function Layout() {

  useMode();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
