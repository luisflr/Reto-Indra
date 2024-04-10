import ArrowLeft from '../../assets/icons/ArrowLeft'
import ArrowRight from '../../assets/icons/ArrowRight'

import './back-forward-buttons.scss'

const BackForwardIconButtons = ({ disabled, isBackButton, isForwardButton, handleButton}: {disabled: boolean, isBackButton: boolean, isForwardButton: boolean, handleButton: () => void}) => {
  return (
    <button disabled={disabled} className='container-buttons' onClick={handleButton}>
      <div className='icon-back-button'>
        {isBackButton && <ArrowLeft wrapperClassName='arrow-left'/>}
        {isForwardButton && <ArrowRight wrapperClassName='arrow-left'/>}
      </div>
    </button>
  )
}

export default BackForwardIconButtons