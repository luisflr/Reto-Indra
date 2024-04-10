import { SimpleButtonInterface } from "../../Interfaces/ComponentInterfaces" 

import "./underline-button.scss"

function UnderlineButton({wrapperClassName='', textButton, onPress}: SimpleButtonInterface) {
  return (
    <button className={`underline-button ${wrapperClassName}`} onClick={onPress}>
      {textButton}
    </button>
  )
}

export default UnderlineButton