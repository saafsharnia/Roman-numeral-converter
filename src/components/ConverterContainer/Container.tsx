import './Container.css';
import Input from '../Input/Input';

function Container() {
  return (
    <div className="container">
      Hello world
      <div className="wrapper">
        <Input
          label='Roman'
        />
        <Input
          label='Number'
        />
      </div>
    </div>
  )
}

export default Container;