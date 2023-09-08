import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/a little donation can have a ripple effect on athletes/i);
  expect(linkElement).toBeInTheDocument();
});