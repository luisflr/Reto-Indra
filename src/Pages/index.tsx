import { lazy } from "react"

export const Login = lazy(() =>  import('./LoginPage/LoginPage'))
export const Plans = lazy(() => import('./PlansPage/PlansPage'))
export const Summary = lazy(() => import('./SummaryPage/SummaryPage'))