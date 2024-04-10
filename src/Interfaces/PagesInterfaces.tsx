import { ReactNode } from 'react'

export interface RimacUserInterface {
  birthDay: string
  documentNumber: string
  documentType: string
  lastName: string
  name: string
  phoneNumber: string
}

export interface UserInterface {
  name: string
  lastName: string
  birthDay: string
}

export interface PageContextInterface{
  selectedPlan: string
  priceOfPlan: number
}

/**Hooks Interfaces */
export interface PlansInterface {
  name: string
  price: number
  description: string []
  age: number
}

/**
 * Route Interfaces
 */

export interface ProtectedRouteInterface {
  children?: ReactNode, 
  isAuth: boolean, 
  redirectTo?: string
}
