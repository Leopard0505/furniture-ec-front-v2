import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter
      future={{
        // https://reactrouter.com/6.30.0/upgrading/future#v7_starttransition
        v7_startTransition: true,
        // https://reactrouter.com/6.30.0/upgrading/future#v7_relativesplatpath
        v7_relativeSplatPath: true,
      }}
    >
      {component}
    </BrowserRouter>
  );
};
