import { FC } from 'react';
import './Input.css';

type Props = {
  onChange?: (value: any | undefined) => void,
  label?: string,
  type?: string,
  value?: number | string,
  placeholder?: string,
  // min?: number,
  // max?: number 
}

const Input: FC<Props> = ({ onChange, type, label, value, placeholder }: Props) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input className="border" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        type={type}
        // min={min}
        // max={max}
      />
    </div>
  )
}

export default Input;