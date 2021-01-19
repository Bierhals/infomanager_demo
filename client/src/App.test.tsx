import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import { configureStore } from './store/configureStore';

test('renders without crashing', () => {
  render(
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Infomanager/i);
  expect(linkElement).toBeInTheDocument();
});
