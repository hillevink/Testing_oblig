import { render } from "@testing-library/react";
import Button from "./Button";
import { colour } from './Button';

it('should render a button', () => {
  render(<Button />)

  const element = document.querySelector('button');
  expect(element).toBeInTheDocument();
});

it('Should check the colour of h1', () => {
  render(<Button />)

  const element = document.querySelector('h1');
  expect(element).toHaveStyle(`color: ${colour}`);
});
