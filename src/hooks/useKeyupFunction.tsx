import { KeyboardEvent } from "react";

export const useKeyupFunction = () => {
  const handleEnterKey = (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      callback();
    }
  };

  return {
    handleEnterKey,
  };
}
