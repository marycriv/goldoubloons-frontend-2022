import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders eyes link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter all ye who seek the blum/i);
  expect(linkElement).toBeInTheDocument();
});
