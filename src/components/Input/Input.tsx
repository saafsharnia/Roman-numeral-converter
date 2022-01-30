import { FC } from 'react';
import './Input.css';

type Props = {
  onChange?: (value: any | undefined) => void,
  label?: string,
  type?: string,
  value?: number | string,
  placeholder?: string
}

const Input: FC<Props> = ({ onChange, type, label, value, placeholder }: Props) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input className="border" type="text" 
        placeholder={placeholder} 
        value={value}
        // onChange={(e) => onChange(e.target.value)}
        onChange={onChange}
      />
    </div>
  )
}

export default Input;