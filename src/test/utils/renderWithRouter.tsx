import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { CookiesProvider } from 'react-cookie';
import { config } from '../../constants/cookie';

export function renderWithRouter(ui: React.ReactElement, { route = '/' } = {}) {
  return render(
    <Provider store={store}>
      <CookiesProvider defaultSetOptions={config}>
        <MemoryRouter initialEntries={[route]}>
          {ui}
        </MemoryRouter>
      </CookiesProvider>
    </Provider>
  );
}
