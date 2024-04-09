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

/**
 * Route Interfaces
 */

export interface ProtectedRouteInterface {
  children?: ReactNode, 
  isAuth: boolean, 
  redirectTo?: string
}