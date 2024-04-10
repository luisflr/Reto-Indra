import Card from "../../../Components/Card/Card"

import { PlansComponentsList } from "../../../Interfaces/HooksInterface"
import iconHouse from '../../../assets/images/IconHouse.png';
import iconHospital from '../../../assets/images/IconHospital.png';

export const getPlansComponents = ({
  plans,
  isDiscounted,
  handleSelectPlan,
  className=''}: PlansComponentsList): JSX.Element[] => {
  const newComponentList: JSX.Element[] = []
  plans.forEach((item, index) => {
    if (index < 3 ) {
      newComponentList.push(
      <div key={`card-${index}`} className={className}>
        <Card
          recommended={index === 1}
          title={item.name}
          iconCard={index % 2 === 0 ? iconHouse : iconHospital}
          coste='COSTO DEL PLAN'
          price={item.price}
          descriptionList={item.description}
          textButton='Seleccionar Plan'
          onClickButtonCard={() => handleSelectPlan(item)}
          showDiscount={isDiscounted}
        />
      </div>)
    }
  }
  )
  return newComponentList;
}