import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useSummary = () => {
  const [stepChecked, setStepChecked] = useState(0)
  
  const navigate = useNavigate()

  const handleBack = () => {
    setStepChecked(1)
    navigate('/plans')
  }
  return {
    /* States */
    stepChecked,
    /* State Functions */
    /* Functions */
    handleBack 
  }
}

export default useSummary