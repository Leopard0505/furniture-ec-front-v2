import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useAccessToken } from "../hooks/useAccessToken";
import { PATH } from "../constants/path";

// 認証済みならリダイレクトさせるレイアウトコンポーネント
export function NotAuthenticateLayout() {
  const [mounted, setMounted] = useState(false);
  const { token } = useAccessToken();

  // ちらつき防止のため
  useEffect(() => {
    setMounted(true);
  }, []);

  // ちらつき防止のため
  if (!mounted) {
    return null;
  }

  if (token) {
    return <Navigate to={PATH.TOP()} />
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
