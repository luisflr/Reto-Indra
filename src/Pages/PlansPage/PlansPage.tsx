import React from 'react'

import BackButton from "../../Components/BackButton/BackButton"
import Carousel from '../../Components/Carousel/Carousel'
import Loader from '../../Components/Loader/Loader'
import RadioButton from "../../Components/RadioButton/RadioButton"
import Stepper from "../../Components/Stepper/Stepper"

import usePlans from "./hooks/usePlans"
import { getPlansComponents } from './utils/functions'

import { Steps, typeOfPlans } from "./utils/constants"
import './plans-page.scss'
import { useAppSelector } from '../../hooks/useRedux'

const PlansPage = () => {
  const {
    checked, plans, isLoading, position,
    setChecked, setPosition,
    handleBack, handleSelectPlan } = usePlans();

  const user = useAppSelector(state => state.user)
  
  return (
    <section className='plans-section'>
      <Stepper steps={Steps} stepChecked={0}/>
      <div className='container'>
        <div className='content'>
          <div className='content__button'>
            <BackButton textButton='Volver' onPress={handleBack}/>
          </div>
          <div className='content__title'>
            <h1 className='title-name'>{user.name} ¿Para quién deseas cotizar?</h1>
            <p className='title-description'>Selecciona la opción que se ajuste más a tus necesidades.</p>
          </div>
          <div className='plan-check-container'>
            {typeOfPlans.map((typePlan, index) => 
              <React.Fragment key={`radio-button-${index}`}>
                <RadioButton
                  checked={checked == index + 1}
                  onSetChecked={() => setChecked(index + 1)}
                  icon={typePlan.icon}
                  title={typePlan.title}
                  description={typePlan.description}
                />
              </React.Fragment>
            )}
          </div>
          {plans.length > 1
            ? 
            <div className='cards-plan-container'>
              {isLoading 
              ? <Loader wrapperClassName='plans-loader'/>
              : <>
                  {getPlansComponents({plans, isDiscounted: checked === 2, handleSelectPlan, className: "cards-laptop"})}
                  <Carousel
                    items={getPlansComponents({plans, isDiscounted: checked === 2, handleSelectPlan, className: "cards-carousel"})}
                    setPosition={setPosition}
                    position={position}
                    numberToUpdatePosition={418}/>
                </>
              
              }
              
            </div>
          : <></>
          }
        </div>
      </div>
    </section>
  )
}

export default PlansPage