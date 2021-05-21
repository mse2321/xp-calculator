import React from 'react';
import { screen, render } from '@testing-library/react';
import Header from './Header';

it('renders Header component', () => {
  render(<Header />);
  
  expect(screen.getByText('XP Calculator')).toBeTruthy();
});
