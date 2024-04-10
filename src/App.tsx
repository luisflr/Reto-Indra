import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import { ProtectedRoutes } from './Routes/ProtectedRoutes';
import { Login, Plans, Summary } from './Pages';
import LoadingPage from './Pages/LoadingPage/LoadingPage';

import useApp from './hooks/useApp';

import './app.scss';
function App() {
  const { user } = useApp();

  return (
    
      <Suspense fallback={<LoadingPage />}>
        <Header/>
          <Routes>
            <Route index path='/' element={<Login />}/>
            <Route path='*' element={<Login />}/>
            <Route  element={<ProtectedRoutes isAuth={user.name.length > 0} />}>
                <Route path='/plans' element={<Plans />}/>
                <Route path='/summary' element={<Summary />}/>
            </Route>
            
          </Routes>
      </Suspense>
    
  )
}

export default App
