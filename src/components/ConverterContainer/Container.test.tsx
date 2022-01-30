import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './Container';
import userEvent from "@testing-library/user-event";

describe('Converter', () => {

  test('renders Converter Properly', () => {
    render(<Container />);
    expect(screen.getByText(/Roman Numeral Convertor/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Roman/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number/i)).toBeInTheDocument();
  });

  test('Insert Roman Input', () => {
    render(<Container />);
    userEvent.paste(screen.getByLabelText(/Roman/i), 'MMVIII');
    expect(screen.getByLabelText(/Number/i)).toHaveValue(2008);
  });

  test('Insert Number Input', () => {
    render(<Container />);
    userEvent.paste(screen.getByLabelText(/Number/i), '1990');
    expect(screen.getByLabelText(/Roman/i)).toHaveValue('MCMXC');
  })

});