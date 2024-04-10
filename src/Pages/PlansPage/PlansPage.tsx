import BackButton from "../../Components/BackButton/BackButton"
import Stepper from "../../Components/Stepper/Stepper"

import usePlans from "./hooks/usePlans"
import RadioButton from "../../Components/RadioButton/RadioButton"

import { Steps, typeOfPlans } from "./utils/constants"
import './plans-page.scss'

const PlansPage = () => {
  const {
    checked, setChecked,
    handleBack } = usePlans();
  return (
    <section className='plans-section'>
      <Stepper steps={Steps} stepChecked={0}/>
      <div className='container'>
        <div className='content'>
          <div className='content__button'>
            <BackButton textButton='Volver' onPress={handleBack}/>
          </div>
          <div className='content__title'>
            <h1 className='title-name'>Rocío ¿Para quién deseas cotizar?</h1>
            <p className='title-description'>Selecciona la opción que se ajuste más a tus necesidades.</p>
          </div>
          <div className='plan-check-container'>
            {typeOfPlans.map((typePlan, index) => 
              <RadioButton
                checked={checked == index + 1}
                onSetChecked={() => setChecked(index + 1)}
                icon={typePlan.icon}
                title={typePlan.title}
                description={typePlan.description}
              />
            )}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlansPage