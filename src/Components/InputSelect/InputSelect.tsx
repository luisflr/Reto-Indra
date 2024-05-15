import { InputSelectInterface } from '../../Interfaces/ComponentInterfaces' 

import ArrowDown from '../../assets/icons/ArrowDown'

import './input-select.scss'

function InputSelect({
  wrapperClassName='', 
  placeholder, 
  options,
  selectedOption,
  inputValue,
  handleInput,
  handleChangeOption }: InputSelectInterface) {
  return (
    <div className={`${wrapperClassName} input-select`}>
      <div className='input-select__select'>
        <select value={selectedOption} onChange={handleChangeOption}>
          {options.map( (option, index) =>
            <option key={`select-${index}`} value={option}>{option}</option>)
          }
        </select>
        <ArrowDown wrapperClassName='arrow-select'/>
      </div>
      <div className='input-select__input'>
        <input
          className='input-form'
          type='tel'
          placeholder={placeholder}
          maxLength={selectedOption === 'DNI' ? 8 : 10}
          value={inputValue}
          onChange={handleInput}
        />
      </div>
    </div>
  )
}

export default InputSelect