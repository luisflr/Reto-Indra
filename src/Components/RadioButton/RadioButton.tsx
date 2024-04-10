import { RadioButtonInterface } from '../../Interfaces/ComponentInterfaces';

import CheckIcon from '../../assets/icons/CheckIcon';

import './radio-button.scss'

const RadioButton = ({
  wrapperClassName,
  checked,
  onSetChecked,
  icon,
  title,
  description}: RadioButtonInterface) => {
  return (
    <button className={`radio-option ${checked ? 'radio-checked' : 'non-checked'} ${wrapperClassName || ''}`} onClick={onSetChecked}>
      <div className='radio-check'>
        <div className='radio'>
          {checked && <CheckIcon />}
        </div>
      </div>
      <div className='radio-description'>
        <div>
          <img src={icon} alt='icono cotizar para mi'/>
          <p className='radio-description__title'>
            {title}
          </p>
          <p className='radio-description__subtitle'>
            {description}
          </p>
        </div>
      </div>
    </button>
  )
}

export default RadioButton