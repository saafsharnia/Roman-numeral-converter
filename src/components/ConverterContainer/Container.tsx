import React, { useState, FC } from 'react';
import './Container.css';
import Input from '../Input/Input';
import { convertRomanToInteger, convertIntegerToRoman } from '../../Utils/ConverterUtils';

const Container: FC = () => {
  const [romanValue, setRomanValue] = useState('');
  const [intValue, setIntValue] = useState(0);

  const onIntChange = (event: any) => {// TODO: fix any type!!
    if (event.target.value > 3999) {
      alert(`INVALID number!! ${event.target.value} is bigger than 3999!`);
    } else{
      const newRomanValue = convertIntegerToRoman(event.target.value);
      setRomanValue(newRomanValue);
      setIntValue(event.target.value);
    }

  }

  const onRomanChange = (event: any) => { // TODO: fix any type!!
    const newIntValue = convertRomanToInteger(event.target.value);
    if (!newIntValue.validator) { //Means the Roman string is invalid
      alert(`"${event.target.value}" is not validate as a Roman numeral`)
      // alert('The inserted Roman string is invalid');
    } else {
      setRomanValue(event.target.value);
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
          // min={0}
          // max={3999}
        />
      </div>
    </div>
  )
}

export default Container;