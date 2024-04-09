import BackButton from "../../Components/BackButton/BackButton"
import Stepper from "../../Components/Stepper/Stepper"

import { Steps } from "./utils/constants"
import './plans-page.scss'

const PlansPage = () => {
  return (
    <section className='plans-section'>
      <Stepper steps={Steps} stepChecked={0}/>
      <div className='container'>
        <div className='content'>
          <div className='content__button'>
            <BackButton textButton='Volver' onPress={()=> console.log('back button')}/>
          </div>
          <div className='content__title'>
            <h1 className='title-name'>Rocío ¿Para quién deseas cotizar?</h1>
            <p className='title-description'>Selecciona la opción que se ajuste más a tus necesidades.</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default PlansPage