import LogoIcon from '../../assets/icons/LogoIcon';
import LogoMobile from '../../assets/icons/LogoMobile';

import './footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__left'>
          <LogoIcon wrapperClassName='logo-icon'/>
          <LogoMobile wrapperClassName='logo-mobile'/>
        </div>
        <hr />
        <div className='footer__right'>
          © RIMAC Seguros y Reaseguros.2024
        </div>
      </div>
    </footer>
  )
}

export default Footer