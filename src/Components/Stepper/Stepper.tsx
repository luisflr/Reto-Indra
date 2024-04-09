import { StepperInterface } from '../../Interfaces/ComponentInterfaces'
import './stepper.scss'

const Stepper = ({ wrapperClassName= '', steps, stepChecked}: StepperInterface) => {
  return (
    <div className={`${wrapperClassName} plans-stepper`}>
        {steps.map((setp, index) => 
          <div key={`step-${index}`} className='step-container'>
            <div className='step-container__content'>
              <div className={`${stepChecked === index ? 'stepper-checked': 'stepper-non-checked'}`}>
                {index + 1 }
              </div>
              <p className={`${stepChecked === index ? 'stepper-text': 'stepper-text-non-checked'}`}>
                {setp}
              </p>
            </div>
            {index < steps.length - 1 && '- - -'}
          </div>
          )}
    </div>
  )
}

export default Stepper