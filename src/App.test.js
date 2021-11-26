import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders my element', () => {
  
  render(<App />);
  const myGreeting = screen.getByTestId('myTest');
  const input = screen.getByRole('textbox')
  expect(myGreeting).toBeInTheDocument();
  //expect(myGreeting).toHaveTextContent(`Hello, Joel`)
  expect(input).toBeInTheDocument()
  userEvent.type(input, 'Smeef' )
  expect(myGreeting).toHaveTextContent(`Hello, Smeef`)
});
