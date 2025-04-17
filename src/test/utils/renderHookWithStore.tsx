import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../stores/store';

export function getWrapper(): React.FC {
  return ({ children }: { children?: React.ReactNode }) => <Provider store={store}>{children}</Provider>;
}
