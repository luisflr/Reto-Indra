import { InputInterface } from '../../Interfaces/ComponentInterfaces'; 

import './input.scss';

function Input({ wrapperClassName='', placeholder, inputValue, handleInput }: InputInterface) {
  return (
    <div className={`${wrapperClassName} input`}>
      <input
        className='input-form'
        type="number"
        placeholder={placeholder}
        maxLength={10}
        value={inputValue}
        onChange={handleInput}
      />
    </div>
  )
}

export default Input