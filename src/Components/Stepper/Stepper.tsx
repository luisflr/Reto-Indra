import { StepperInterface } from '../../Interfaces/ComponentInterfaces'
import BackForwardIconButtons from '../BackForwardButtons/BackForwardButtons'
import './stepper.scss'

const Stepper = ({ wrapperClassName= '', steps, stepChecked, handleBackButton = () => {}}: StepperInterface) => {
  return (
    <div className={`${wrapperClassName} plans-stepper`}>
        {/* Mobile view*/}
        <div className='plans-stepper__mobile'>
          <div className='button-stepper'>
            <BackForwardIconButtons
              disabled={false}
              isBackButton={true}
              isForwardButton={false}
              handleButton={handleBackButton}
            />
            <span className='steps-text'>PASO {stepChecked + 1} DE {steps.length}</span>
          </div>
          <div className='progress-bar'>
            <span className='progress-bar__span' style={{width: stepChecked + 1 === steps.length ? '100%' : '50%'}}></span>
          </div>
        </div>
        
        {steps.map((setp, index) => 
          <div key={`step-${index}`} className='step-container'>
            {/* PC view*/}
            <div className='step-container__content'>
              <div className={`${stepChecked === index ? 'stepper-checked': 'stepper-non-checked'}`}>
                {index + 1 }
              </div>
              <p className={`${stepChecked === index ? 'stepper-text': 'stepper-text-non-checked'}`}>
                {setp}
              </p>
            </div>
            {index < steps.length - 1 && <p>- - -</p>}
          </div>
          )}
    </div>
  )
}

export default Stepper