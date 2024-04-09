import { ButtonInterface } from "../../Interfaces/ComponentInterfaces" 
import Loader from "../Loader/Loader"

import "./button.scss"
const Button = ({
  textButton, 
  type, 
  wrapperClassName= '', 
  action,
  loading
}: ButtonInterface) => {
  return (
    <button
      type="submit"
      onClick={action}
      className={`${wrapperClassName} form-button ${type}`}>
        {loading 
          ? <Loader/>
          : textButton
        }
    </button>
  )
}

export default Button