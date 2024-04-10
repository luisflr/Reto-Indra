
import BackButton from '../../Components/BackButton/BackButton'
import Stepper from '../../Components/Stepper/Stepper';
import CardInfo from '../../Components/CardInfo/CardInfo';

import useSummary from "./hooks/useSummary";
import { useAppSelector } from '../../hooks/useRedux';

import { Steps } from '../PlansPage/utils/constants';
import './summary-page.scss'

const SummaryPage = () => {

  const { handleBack } = useSummary();
  const {plan, user} = useAppSelector(state => state)

  return (
    <section className='summary-section'>
      <Stepper steps={Steps} stepChecked={1} handleBackButton={handleBack}/>
      <div className='container'>
        <div className='summary-content'>
          <div className='button-container'>
            <BackButton textButton='Volver' onPress={()=> handleBack()}/>
          </div>
          <div className='summary-content__title'>
            <h1 className='summary-title'>Resumen del seguro</h1>
          </div>
          <div className='cards-plan-container'>
            <CardInfo userName={`${user.name} ${user.lastName}`} priceOfPlan={plan.priceOfPlan} selectedPlan={plan.selectedPlan}/>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default SummaryPage