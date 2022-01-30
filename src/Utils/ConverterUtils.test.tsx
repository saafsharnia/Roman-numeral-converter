import { render, screen } from '@testing-library/react';
import { convertRomanToInteger, convertIntegerToRoman,
  numberValidator } from './ConverterUtils';

describe('Converter Utils', () => {

  test('Roman to Number method', () => {
    const result = convertRomanToInteger('MMVIII');
    expect(result).toEqual({res: 2008, validator: true});
  });

  test('Number to Roman method', () => {
    const result = convertIntegerToRoman(1990);
    expect(result).toEqual('MCMXC');
  });

  test('validation Number method', () => {
    const result = numberValidator(4000)
    expect(result).toEqual(false);
  });

  test('validation Roman', () => {
    const result = convertRomanToInteger('OL')
    expect(result.validator).toEqual(false);
  });

})