import React from 'react';
import { screen, render } from '@testing-library/react';
import Calculator from './Calculator';

it('renders Calculator component', () => {
  render(<Calculator />);
  
  expect(screen.getByText('Character Name')).toBeTruthy();
  expect(screen.getByText('Character Level')).toBeTruthy();
  expect(screen.getByText('Current XP')).toBeTruthy();
  expect(screen.getByText('Newly Earned XP')).toBeTruthy();
});
