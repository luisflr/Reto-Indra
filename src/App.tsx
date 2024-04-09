import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import { ProtectedRoutes } from './Routes/ProtectedRoutes';
import { Login, Plans } from './Pages';

import useApp from './hooks/useApp';

import './app.scss';
function App() {
  const { user } = useApp();

  return (
    <Suspense fallback={<h1> Cargando ...</h1>}>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route index element={<Login />}/>
            <Route path='/' element={<Login />}/>
            <Route path='*' element={<Login />}/>
            <Route  element={<ProtectedRoutes isAuth={user.name.length > 0} />}>
                <Route path='/plans' element={<Plans />}/>
            </Route>
            
          </Routes>
      </BrowserRouter>
    </Suspense>
    
  )
}

export default App
