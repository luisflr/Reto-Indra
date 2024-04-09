import { useEffect } from 'react'

import { authUser } from "../redux/userSlice";
import { useAppDispatch, useAppSelector } from './useRedux';

const useApp = () => {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(localStorage.getItem('user')) {
      const userStorage = JSON.parse(localStorage.getItem('user') as string)
      dispatch(authUser(userStorage))
    } 
  }, [user])
  
  
  return {
    /**States */
    user,

    /**State Functions */
    /**Functions */
  }
}

export default useApp