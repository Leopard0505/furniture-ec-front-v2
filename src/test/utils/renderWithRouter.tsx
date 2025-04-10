import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../../stores/store';

export const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};
