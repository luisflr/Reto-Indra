
import { Navigate, Outlet } from 'react-router-dom'

import { ProtectedRouteInterface } from '../Interfaces/PagesInterfaces'

export const ProtectedRoutes = ({ isAuth, redirectTo='/' }: ProtectedRouteInterface) => {
  return isAuth ? <Outlet /> : <Navigate to={redirectTo}/>
}

