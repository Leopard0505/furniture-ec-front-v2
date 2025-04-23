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

  const handleArrowUpKey = (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      callback();
    }
  };

  const handleArrowDownKey = (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      callback();
    }
  };

  const handleTabKey = (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      callback();
    }
  };

  return {
    handleEnterKey,
    handleEscapeKey,
    handleArrowUpKey,
    handleArrowDownKey,
    handleTabKey,
  };
}
