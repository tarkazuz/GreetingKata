import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders my element', () => {
  render(<App />);
  const myGreeting = screen.getByTestId('myTest');
  const input = screen.getByRole('textbox')
  expect(myGreeting).toBeInTheDocument();
  expect(input).toBeInTheDocument()
  userEvent.type(input, 'Smeef' )
  expect(myGreeting).toHaveTextContent(`Hello, Smeef`)
});

test('when no input, prints Hello, my friend', ()=>{
  render(<App/>)
  const myGreeting = screen.getByTestId('myTest');
  const input = screen.getByRole('textbox')
  expect(myGreeting).toHaveTextContent('Hello, my friend')

})
