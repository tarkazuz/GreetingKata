import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my element', () => {
  const name = 'My name'
  render(<App name={name}/>);
  const myGreeting = screen.getByTestId('myTest');
  expect(myGreeting).toBeInTheDocument();
  expect(myGreeting).toHaveTextContent(`Hello, ${name}`)
});
