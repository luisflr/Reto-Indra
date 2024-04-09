import { UnderlineButtonInterface } from "../../Interfaces/ComponentInterfaces" 

import "./underline-button.scss"

function UnderlineButton({wrapperClassName='', textButton, onPress}: UnderlineButtonInterface) {
  return (
    <button className={`underline-button ${wrapperClassName}`} onClick={onPress}>
      {textButton}
    </button>
  )
}

export default UnderlineButton