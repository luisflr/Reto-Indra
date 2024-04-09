import { CheckBoxInterface } from '../../Interfaces/ComponentInterfaces'; 

import './checkbox.scss';

const Checkbox = ({ wrapperClassName='', labelText, isChecked, handleCheckedOption, error}: CheckBoxInterface) => {
  return (
    <label className={`checkbox-login${error ? '-error' : ''} ${wrapperClassName}`} id="c1">
      <input type="checkbox" checked={isChecked} onChange={handleCheckedOption}/>
      {labelText}
    </label>
    
  )
}

export default Checkbox