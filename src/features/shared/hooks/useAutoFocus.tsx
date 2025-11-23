import { useCallback, useEffect } from "react";

export function useAutoFocus<T extends HTMLElement>(targetRef: React.RefObject<T | null>) {
  const focus = useCallback(() => {
    if (targetRef && targetRef?.current) {
      targetRef.current.focus();
    }
  }, [targetRef]);

  useEffect(() => {
    focus();
  });

  return {
    focus,
  }
}
