import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthState } from '../context/AuthContext';
import Login from '../pages/Login';
import Main from '../pages/Main';

const Router = () => {
  const { isLoggedIn } = useAuthState();

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Main /> : <Navigate replace to="/login" />}
      />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate replace to="/" /> : <Login />}
      />
    </Routes>
  );
};

export default Router;
