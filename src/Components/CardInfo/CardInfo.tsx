import { CardInfoInterface } from '../../Interfaces/ComponentInterfaces'
import UsersIcon from '../../assets/icons/Users'
import './card-info.scss'

const CardInfo = ({ userName, selectedPlan, priceOfPlan }: CardInfoInterface) => {
  return (
    <div className='card-info'>
      <div className='card-info__content'>
        <div className='card-info-title'>
          <div className='card-info-title__text'>
            <p>PRECIOS CALCULADOS PARA </p>
            <div className='card-info-name'>
              <UsersIcon wrapperClassName='card-info-name__icon'/>
              <p className='card-info-name__name'>{userName}</p>
            </div>
          </div>
        </div>
        <div className='line-separator'></div>
        <div className='card-info-description'>
          <p className='card-info-description__title'>
            Responsable de pago
          </p>
          <p className='number'>
            DNI: 30216147
          </p>
          <p className='number'>
            Celular: 5130216147
          </p>
        </div>
        <div className='card-info-description'>
          <p className='card-info-description__title'>
            Plan elegido
          </p>
          <p className='number'>
            {selectedPlan}
          </p>
          <p className='number'>
            Costo del Plan: ${priceOfPlan} al mes 
          </p>
        </div>
      </div>
      </div>
  )
}

export default CardInfo