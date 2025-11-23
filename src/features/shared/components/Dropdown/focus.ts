import type { RefObject } from "react";

function baseFocus(
  targetRef: RefObject<HTMLUListElement | null>,
  increment: number
): void {
  if (!targetRef.current) return;

  const focusableItems = Array.from(
    targetRef.current.querySelectorAll("li[tabindex='0']") || []
  );
  const currentIndex = focusableItems.indexOf(
    document.activeElement as HTMLElement
  );
  const index = currentIndex + increment;

  if (index >= 0 && index < focusableItems.length) {
    (focusableItems[index] as HTMLElement).focus();
  }
}

export const prevFocus = (
  targetRef: RefObject<HTMLUListElement | null>
): void => {
  baseFocus(targetRef, -1);
};

// nextIndexを取得してfocusを移動する
export const nextFocus = (
  targetRef: RefObject<HTMLUListElement | null>
): void => {
  baseFocus(targetRef, 1);
};
