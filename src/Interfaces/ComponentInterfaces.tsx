import { ChangeEvent } from 'react'

interface CommonInterface {
  wrapperClassName?: string
}

type typeColor = 'primary' | 'secondary' 

export interface CheckBoxInterface extends CommonInterface{
  labelText: string
  isChecked: boolean
  error: boolean
  handleCheckedOption: () => void
}

export interface InputInterface extends CommonInterface{
  placeholder: string
  inputValue: string
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface InputSelectInterface extends CommonInterface{
  placeholder: string
  options: string[]
  inputValue: string
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface ErrorMessageInterface extends CommonInterface{
  textMessage: string
}

export interface SimpleButtonInterface extends CommonInterface{
  textButton: string
  onPress?: () => void
}

export interface ButtonInterface extends CommonInterface{
  type: typeColor
  textButton?: string
  action?: () => void
  loading: boolean
}

export interface ModalInterface extends CommonInterface{
  isOpen: boolean
  title?: string
  description?: string
  closeModal: () => void
}

export interface StepperInterface extends CommonInterface{
  steps: string[]
  stepChecked: number
}

export interface RadioButtonInterface extends CommonInterface{
  checked: boolean
  onSetChecked: () => void
  icon: string
  title: string
  description: string
}

export interface CardInterface extends CommonInterface{
  recommended?: boolean,
  showDiscount: boolean,
  title: string,
  iconCard: string,
  coste: string,
  price: number,
  descriptionList: string[],
  textButton: string,
  onClickButtonCard: () => void
}

export interface CarouselInterface extends CommonInterface {
  items: JSX.Element[], 
  setPosition: (newPosition: number) => void, 
  position: number, 
  numberToUpdatePosition: number
}

export interface CardInfoInterface extends CommonInterface{
  selectedPlan: string
  priceOfPlan: number
  userName: string
}