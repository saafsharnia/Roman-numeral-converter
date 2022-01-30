import React, { useState, FC } from 'react';
import './Container.css';
import Input from '../Input/Input';
import { convertRomanToInteger, convertIntegerToRoman,
  numberValidator } from '../../Utils/ConverterUtils';

const Container: FC = () => {
  const [romanValue, setRomanValue] = useState('');
  const [intValue, setIntValue] = useState(0);

  const onIntChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    if (!numberValidator(value)) {
      alert(`INVALID number!! ${event.target.value} is bigger than 3999!`);
    } else {
      // If the value is valid, Change both input values
      const newRomanValue = convertIntegerToRoman(value);
      setRomanValue(newRomanValue);
      setIntValue(value);
    }
  }

  const onRomanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    const newIntValue = convertRomanToInteger(value);
    if (!newIntValue.validator) { //Means the Roman string is invalid
      alert(`"${event.target.value}" is not valid as a Roman numeral`);
    } else {
      // If the value is valid, Change both input values
      setRomanValue(value);
      setIntValue(newIntValue.res);
    }
  }


  return (
    <div className="container">
      <span className='title'>
        Roman Numeral Convertor
      </span>
      <div className="wrapper">
        <Input
          id='roman-input'
          label='Roman'
          value={romanValue} 
          type='string'
          placeholder='Roman Numeral String'
          onChange={onRomanChange}
        />
        <span className='icon'>
          &#8646;
        </span>
        <Input
          id='number-input'
          label='Number'
          value={intValue} 
          type='number'
          onChange={onIntChange}
        />
      </div>
    </div>
  )
}

export default Container;