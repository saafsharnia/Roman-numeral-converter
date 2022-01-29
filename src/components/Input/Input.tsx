import { FC } from 'react';
import './Input.css';

type Props = {
  onChange?: (value: number | string | null) => void,
  label?: string,
  type?: string,
  value?: number | string,
  placeholder?: string
}

const Input: FC<Props> = ({ onChange, type, label, value, placeholder }: Props) => {
  return (
    <div className="wrapper">
      <label>{label}</label>
      <input className="border" type="text" placeholder={placeholder} value={value}/>
    </div>
  )
}

export default Input;