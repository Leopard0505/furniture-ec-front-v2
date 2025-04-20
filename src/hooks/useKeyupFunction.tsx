import { KeyboardEvent } from "react";

export const useKeyupFunction = () => {
  const handleEnterKey = (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      callback();
    }
  };

  const handleEscapeKey = (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      callback();
    }
  };

  return {
    handleEnterKey,
    handleEscapeKey,
  };
}
