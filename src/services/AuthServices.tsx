
export const getUser = async () => {
  const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json/')
                    .then(resp => resp.json())
                    .then(data => data)
  return response                    
}