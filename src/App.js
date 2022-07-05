import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { useAuthState } from './context/AuthContext';

function App() {
  const { isLoggedIn } = useAuthState();

  return (
    <Routes>
      <Route
        path='/'
        element={
          isLoggedIn ? <div>main</div> : <Navigate replace to='/login' />
        }
      />
      <Route
        path='/login'
        element={isLoggedIn ? <Navigate replace to='/' /> : <Login />}
      />
    </Routes>
  );
}

export default App;
