import { useState } from 'react'

const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    /*States*/
    isOpen,
    /**State Functions */
    /**Functions */
    openModal,
    closeModal
  }
}

export default useHeader