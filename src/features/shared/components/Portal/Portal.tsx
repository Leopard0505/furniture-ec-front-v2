import React from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById('portal') as HTMLElement;
  return createPortal(children, el);
}
