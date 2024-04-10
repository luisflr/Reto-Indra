import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { authUser } from '../../../redux/userSlice';
import { getPlans } from '../../../services/PlanServices';

import { DataOfPlansInterface, PlansInterface } from '../../../Interfaces/HooksInterface';
import { INITIAL_STATE } from '../../../utils/constants';
import { PlansInitialState } from '../utils/constants';
import { updatePlan } from '../../../redux/planSlice';

const usePlans = () => {
  const [checked, setChecked] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const [plans, setPlans] = useState<PlansInterface[]>(PlansInitialState)
  const [position, setPosition] = useState<number>(0);
  const [currentPlan, setCurrentPlan] = useState<number>(1)

  const user = useAppSelector(state => state.user)
  
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleBack = () => {
    localStorage.removeItem('user')
    if (user.name.length > 0) dispatch(authUser(INITIAL_STATE))
    navigate('/')
  }

  const hadleCheckPlan = async () => {
    setIsLoading(true)
    try {
      const data: DataOfPlansInterface = await getPlans()
      setPlans(data.list)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }

  }

  const handleSelectPlan = (plan: PlansInterface) => {
    const newPrice: number = (plan.price * 5) / 100
    const discounted: number = plan.price - Number(newPrice.toFixed(2))
    dispatch(updatePlan({ 
      priceOfPlan: checked === 0 ? plan.price : discounted, 
      selectedPlan: plan.name
    }))
    navigate('/summary')
  }

  useEffect(() => {
    if (checked > 0) hadleCheckPlan()
  },[checked])


  return { 
    /* States */
    checked,
    plans,
    isLoading,
    position,
    currentPlan,
    /* State Functions */
    setChecked,
    setPosition,
    setCurrentPlan,
    /* Functions */
    handleBack ,
    handleSelectPlan
  }
}

export default usePlans