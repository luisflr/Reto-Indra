import BackForwardIconButtons from '../BackForwardButtons/BackForwardButtons';

import { CarouselInterface } from '../../Interfaces/ComponentInterfaces';
import './carousel.scss';
import useCarousel from './hooks/useCarousel';

const Carousel = ({
  items,
  setPosition,
  position,
  numberToUpdatePosition,
  wrapperClassName=''}: CarouselInterface) => {
  const { currentItem, handlePrevClick, handleNextClick } = useCarousel({items, setPosition, position, numberToUpdatePosition})

  return (
    <div className={`carousel-container ${wrapperClassName}`}>
      <div className='carousel' style={{ transform: `translateX(${position}px)` }}>
        {items.map((_item, index) => <div className='carousel-item' key={`carousel-${index}`}>{_item}</div> )}
      </div>
      <div className='carousel-buttons'>
        <BackForwardIconButtons
          disabled={currentItem === 1}
          isBackButton={true}
          isForwardButton={false}
          handleButton={handlePrevClick}
        />
        <span>{currentItem} / {items.length}</span>
        <BackForwardIconButtons
          disabled={currentItem === items.length}
          isBackButton={false}
          isForwardButton={true}
          handleButton={handleNextClick}
        />
      </div>
    </div>
  );
}

export default Carousel;