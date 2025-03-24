import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const TestBrowserRouter = ({ children }: { children: React.ReactNode }) => {

  return (
    <BrowserRouter
      future={{
        // https://reactrouter.com/6.30.0/upgrading/future#v7_starttransition
        v7_startTransition: true,
        // https://reactrouter.com/6.30.0/upgrading/future#v7_relativesplatpath
        v7_relativeSplatPath: true,
      }}
    >
      {children}
    </BrowserRouter>
  );
}
