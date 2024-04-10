import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { authUser } from '../../../redux/userSlice';
import { INITIAL_STATE } from '../../../utils/constants';
import { useState } from 'react';

const usePlans = () => {
  const [checked, setChecked] = useState<number>(0)

  const user = useAppSelector(state => state.user)
  
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleBack = () => {
    localStorage.removeItem('user')
    if (user.name.length > 0) dispatch(authUser(INITIAL_STATE))
    navigate('/')
  }

  return { 
    /* States */
    checked,
    /* State Functions */
    setChecked,
    /* Functions */
    handleBack,
  }
}

export default usePlans