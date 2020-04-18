import React from 'react';
import { render } from '@testing-library/react';
import Articles from './blog';

test('renders learn react link', () => {
  const { getByText } = render(<Articles />);
  const articles = getByText(/Articles/i);
  expect(articles).toBeInTheDocument();
});
