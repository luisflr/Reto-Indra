import { useState } from 'react'
import { CarouselInterface } from '../../../Interfaces/ComponentInterfaces';

const useCarousel = ({ position, setPosition, numberToUpdatePosition, items }: CarouselInterface) => {
  const [currentItem, setCurrentItem] = useState<number>(1)

  const handlePrevClick = () => {
    const newPosition: number = position + numberToUpdatePosition;
    setPosition(Math.min(newPosition, 0));
    const updatedItem = currentItem - 1
    setCurrentItem(Math.max(updatedItem, 1))
  };

  const handleNextClick = () => {
    const newPosition: number = position - numberToUpdatePosition;
    setPosition(Math.max(newPosition, - (numberToUpdatePosition * (items.length - 1)) ));
    const updatedItem = currentItem + 1
    setCurrentItem(Math.min(updatedItem, items.length))
  };
  return {
    /**States */
    currentItem,
    /**State Functions */
    /**Functions */
    handlePrevClick,
    handleNextClick
  }
}

export default useCarousel