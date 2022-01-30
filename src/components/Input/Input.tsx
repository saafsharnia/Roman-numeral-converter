import { FC } from 'react';
import './Input.css';

type Props = {
  onChange?: (value: any | undefined) => void,
  label?: string,
  type?: string,
  value?: number | string,
  placeholder?: string,
  id?: string
}

const Input: FC<Props> = ({ onChange, type, label, value, placeholder, id }: Props) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>
        {label}
      </label>
      <input className="border" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        type={type}
        id={id}
      />
    </div>
  )
}

export default Input;