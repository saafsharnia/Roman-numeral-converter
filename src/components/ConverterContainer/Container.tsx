import React, { useState, FC } from 'react';
import './Container.css';
import Input from '../Input/Input';
import { convertRomanToInteger, convertIntegerToRoman } from '../../Utils/ConverterUtils';

const Container: FC = () => {
  const [romanValue, setRomanValue] = useState('');
  const [intValue, setIntValue] = useState(0);

  const onIntChange = (event: any) => {// TODO: fix any type!!
    setIntValue(event.target.value);
    if (event?.target.value > 3999) {
      alert('The number must be less that 3999!');
    } else{
      const newRomanValue = convertIntegerToRoman(event?.target.value);
      setRomanValue(newRomanValue);
    }

  }

  const onRomanChange = (event: any) => { // TODO: fix any type!!
    const newIntValue = convertRomanToInteger(event.target.value);
    setRomanValue(event.target.value);
    if (!newIntValue.validator) { //Means the Roman string is invalid
      alert('The inserted Roman string is invalid');
    } else {
      setIntValue(newIntValue.res);
    }
  }


  return (
    <div className="container">
      Roman Numeral Convertor
      <div className="wrapper">
        <Input
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