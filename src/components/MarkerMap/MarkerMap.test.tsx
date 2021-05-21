import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';

import { MarkerMap } from './MarkerMap';
import { MarkersProvider } from '../../features/markers';

const src = 'https://picsum.photos/600/600';

test('img must have the correct src attr', () => {
  render(<MarkerMap src={src} />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', src);
});

test('should add marker on img and add text to marker', () => {
  render(
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      autoHideDuration={3000}
    >
      <MarkersProvider>
        <MarkerMap src={src} />
      </MarkersProvider>
    </SnackbarProvider>,
  );

  fireEvent.dblClick(screen.getByRole('img'), { clientX: 100, clientY: 100 });
  const marker = screen.getByTestId('marker');
  expect(marker).toBeInTheDocument();

  fireEvent.input(marker, {
    target: {
      textContent: 'Some text',
    },
  });
  expect(marker).toHaveTextContent('Some text');
});
