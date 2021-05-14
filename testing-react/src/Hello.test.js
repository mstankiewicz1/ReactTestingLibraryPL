import React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';
import Hello from './Hello';


test("Component Hello wyświetla text hello", () => {
  const { getByTestId, getByRole } = render(<Hello/>);
  // wrapper.debug();
  const naszText = getByTestId('moj-heading');
  // expect(naszText).toBeTruthy();

  const button = getByRole('button');
  fireEvent.click(button);

  const imie = 'Krystian';
  const input = getByRole('textbox');
  expect(input).toHaveValue('');
  fireEvent.change(input, { target: { value: imie }});
  expect(input).toHaveValue(imie);

  // console.log(naszText.tagName);
  expect(naszText.tagName).toBe('H2');
  // console.log(naszText.textContent);
  expect(naszText.textContent).toBe('Hello');
});