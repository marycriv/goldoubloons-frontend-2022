import React from 'react';

import { render, screen } from '@testing-library/react';
import ErrorPage from '../ErrorPage';

test('renders error page', () => {

  render(
      <ErrorPage />
    );
  
  // expect to see error image
  const errorImage = screen.getByAltText(/404 Page Not Found/i);
  expect(errorImage).toBeInTheDocument();

});