import { CardInterface } from "../../Interfaces/ComponentInterfaces"
import Button from "../Button/Button"

import './card.scss'

const Card = ({
  recommended,
  title,
  iconCard,
  showDiscount,
  coste,
  price,
  descriptionList,
  textButton,
  onClickButtonCard
}: CardInterface) => {

  const newPrice: number = (price * 5) / 100
  const discounted: number = price - Number(newPrice.toFixed(2))

  return (
    <div className='card-plan'>
      {recommended && 
        <div className='badge'>Plan recomendado</div>
      }
      <div className='card-plan__content'>
        <div className='card-title'>
          <div className='card-title__text'>
            <p>{title}</p>
            <div className='card-description'>
              <p className='card-description__coste'>{coste}</p>
              {showDiscount ? <p className='card-description__discount'>${ price} antes </p> : <></>}
              <p className='card-description__price'>${showDiscount ? discounted : price} al mes</p>
            </div>
          </div>
          <div className='card-title__icon'>
            <img src={iconCard} />
          </div>
        </div>
        <div className='line-separator'></div>
        <ul className='card-list'>
          {descriptionList.map((item, index) => 
            <li key={`description-${index}`} className='card-list__item'>
              {item}
            </li>
            )
          }
        </ul>
        <Button
          wrapperClassName='card-button'
          loading={false} type='secondary'
          textButton={textButton}
          action={onClickButtonCard}
        />
      </div>
    </div>
  )
}

export default Card