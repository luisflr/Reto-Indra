export const getPlans = async () => {
  const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json/')
                    .then(resp => resp.json())
                    .then(data => data)
  return response                    
}