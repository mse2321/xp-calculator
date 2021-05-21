import React from 'react';
import { screen, render } from '@testing-library/react';
import Footer from './Footer';

it('renders Footer component', () => {
  render(<Footer />);
  
  expect(screen.getByText('ME Innovation')).toBeTruthy();
});
