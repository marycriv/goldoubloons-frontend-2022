import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

test('renders eyes link + clickable', () => {
  render(<App />);
  const eyesLinkElement = screen.getByText(/Enter all ye who seek the blum/i);
  expect(eyesLinkElement).toBeInTheDocument();

  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();

  // click eyesLinkElement
  fireEvent.click(eyesLinkElement);
});
