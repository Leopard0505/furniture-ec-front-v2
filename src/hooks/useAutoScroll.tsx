import { useEffect } from "react";
import { useLocation } from "react-router";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// ブラウザの「戻る」や「進む」操作では、React RouterがURLの変更を検知しても、
// ブラウザが自動的に以前のスクロール位置を復元するため、window.scrollTo(0, 0) が上書きされてしまう。
//
// ブラウザは「戻る」「進む」操作時に、デフォルトでスクロール位置を保持する仕様になっている。
// この動作が、useAutoScrollフックで意図したスクロール位置のリセットを妨げている。
//
// 解決方法は、ブラウザのスクロール位置復元を無効化し、常にトップにスクロールするように制御する必要がある。
// 以下のように、history.scrollRestoration を設定することで解決できる。
//
// useEffect(() => {
//   // Disable browser's scroll restoration
//   const originalScrollRestoration = history.scrollRestoration;
//   history.scrollRestoration = "manual";
//
//   scrollToTop();
//
//   return () => {
//     // Restore original scroll restoration behavior
//     history.scrollRestoration = originalScrollRestoration;
//   };
// }, [pathname]);

export const useAutoScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return {
    scrollToTop,
  };
}
