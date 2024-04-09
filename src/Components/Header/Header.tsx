
import './header.scss'
import LogoIcon from '../../assets/icons/LogoIcon'
import UnderlineButton from '../UnderlineButton/UnderlineButton'
import useHeader from './hooks/useHeader'
import Modal from '../Modal/Modal'
import PhoneIcon from '../../assets/icons/PhoneIcon'

function Header() {
  const {isOpen, openModal, closeModal} = useHeader()
  return (
    <>
      <header className='header'>
        <nav className='container'>
          <div className='header__logo'>
            <LogoIcon wrapperClassName='logo-icon'/>
          </div>
          <div className='text-header'>
            <UnderlineButton
              wrapperClassName='text-header__underline'
              textButton='¡Compra por este medio!'
              onPress={openModal}
            />
            <a className='text-header__contact'>
              <PhoneIcon wrapperClassName='phone-icon' />
              <span className='phone-number'>
                (01) 411 6001
              </span>
            </a>
          </div>
        </nav>
      </header>
      {isOpen && <Modal
        title='Compra por este medio'
        isOpen={isOpen}
        closeModal={closeModal}
        description='Esta opción te permite comprar de manera segura y conveniente en línea. Descubre las ventajas y comienza tu experiencia de compra en nuestra plataforma.'
      />}
      
    </>
  )
}

export default Header
