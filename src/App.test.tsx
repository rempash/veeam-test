import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render app base screen(just white screen with upload btn)', () => {
  render(
      <App />
  );
  const uploadBtn = screen.getByRole('button');
  expect(uploadBtn).toBeInTheDocument();
});
