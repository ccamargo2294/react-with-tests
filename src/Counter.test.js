// src/Counter.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component', () => {
  test('initializes count at 0', () => {
    render(<Counter />);
    expect(screen.getByText(/Counter:/i).textContent).toBe("Counter: 0");
  });

  test('increments count by 1 when increment button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText(/Counter:/i).textContent).toBe("Counter: 1");
  });

  test('decrements count by 1 when decrement button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText(/Counter:/i).textContent).toBe("Counter: -1");
  });

  // Add more tests as needed
});
