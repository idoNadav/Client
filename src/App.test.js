import { render, screen } from '@testing-library/react';
import App from './App';
import Particles from 'react-particles-js';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
