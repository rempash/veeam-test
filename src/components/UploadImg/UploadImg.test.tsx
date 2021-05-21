import React from 'react';
import { render, screen } from '@testing-library/react';

import { UploadImg } from './UploadImg';

test("it should render button with 'Upload Image' text and input[type=file]", () => {
  render(<UploadImg />);
  const uploadBtn = screen.getByRole('button');
  const inputFile = screen.getByTestId('inputFile');
  expect(uploadBtn).toBeInTheDocument();
  expect(inputFile).toBeInTheDocument();
  expect(uploadBtn).toHaveTextContent('Upload Image');
});
