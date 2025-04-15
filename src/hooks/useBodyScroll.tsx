import { useCallback } from "react";

export const useBodyScroll = () => {

  const disableBodyScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const enableBodyScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  return {
    disableBodyScroll,
    enableBodyScroll,
  }
}
