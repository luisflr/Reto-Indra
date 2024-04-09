
import Button from '../../Components/Button/Button';
import Checkbox from '../../Components/CheckBox/Checkbox';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import Input from '../../Components/Input/Input';
import InputSelect from '../../Components/InputSelect/InputSelect';
import UnderlineButton from '../../Components/UnderlineButton/UnderlineButton';

import familyImage from '../../assets/images/family.png';
import useLogin from './hooks/useLogin';
import { options } from './utils/constants';
import blurPurple from '../../assets/images/blur-asset-purple.png';
import blurGreen from '../../assets/images/blur-asset-green.png';
import blurPurpleMobile from '../../assets/images/blur-asset-purple-mobile.png';
import blurGreenMobile from '../../assets/images/blur-asset-green-mobile.png';

import './login.scss'
import Footer from '../../Components/Footer/Footer';
import Modal from '../../Components/Modal/Modal';

const LoginPage = () => {
  const {
    isLoading, documentValue, phoneNumber, error, checkedBox, isOpen,
    handleSearch, handleDocumentValue, handlePhoneValue, 
    handleChecked, openModal, closeModal} = useLogin();

  return (
    <>
      <section className='login'>
        <div className='container'>
  
          <div className='image-container'>
            <img src={familyImage} alt='image family'/>
          </div>
  
          <div className='text-container'>
            <div className='form-header'>
              <div>
                <span className='tag-seguro'>Seguro Salud Flexible</span>
                <h1 className='title-seguro'>Creado para ti y tu familia</h1>
              </div>
              <div className='image-tablet'>
                <img src={familyImage}/>
              </div>
            </div>
            <div className='horizontal-line' />
            
            <h2 className='description-seguro'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online</h2>
  
            <div className='form-login' >
              <InputSelect  
                placeholder='Nro. de documento'
                options={options}
                inputValue={documentValue}
                handleInput={handleDocumentValue}
              />
              {error && <ErrorMessage textMessage='*El documento ingresado no es válido'/>}
              <Input  
                placeholder='Celular'
                inputValue={phoneNumber}
                handleInput={handlePhoneValue}
              />
              {error && <ErrorMessage textMessage='*El celular ingresado no es válido'/>}
              <div className='checkboxes-login'>
                {checkedBox.map((checkbox, index) => 
                  <div key={`checkbox-${index}`}>
                    <Checkbox
                      labelText={checkbox.text}
                      isChecked={checkbox.isChecked}
                      error={error ? !checkbox.isChecked : false}
                      handleCheckedOption={() => handleChecked(index)}
                    />
                  </div>
                )}
              </div>
              <UnderlineButton
                wrapperClassName='underline-button-login'
                textButton='Aplican Términos y condiciones'
                onPress={openModal}
              />
              <Button
                action={handleSearch}
                wrapperClassName='button-login' 
                textButton='Cotiza aqui' 
                type='primary'
                loading={isLoading}
              />
            </div>
  
          </div>
        </div>
  
        <img src={blurPurple} className='purple-blur' alt='blur purple'/>
        <img src={blurGreen} className='green-blur' alt='blur green'/>
        
        <img src={blurGreenMobile} className='green-blur-tablet' alt='blur green'/>
        <img src={blurPurpleMobile} className='purple-blur-tablet' alt='blur green'/>
      </section>
      {isOpen && <Modal
          title='Aplican Términos y Condiciones'
          isOpen={isOpen}
          closeModal={closeModal}
          description="Encontrarás información importante sobre tus derechos y obligaciones al utilizar nuestros servicios. Cubren aspectos clave como la privacidad, la seguridad y la conducta esperada. Te recomendamos encarecidamente familiarizarte con estos términos para estar bien informado. \n Si tienes preguntas o inquietudes sobre los 'Términos y Condiciones', no dudes en ponerte en contacto con nuestro equipo de soporte. Estamos aquí para ayudarte y garantizar que tu experiencia sea transparente y segura."
        />}
      <Footer />
    </>
  )
}

export default LoginPage