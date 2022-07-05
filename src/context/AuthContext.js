import React from 'react';

const defaultContext = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};
const AuthContext = React.createContext(defaultContext);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    !!localStorage.getItem('isLoggedIn')
  );

  const login = () => {
    localStorage.setItem('isLoggedIn', true);
    const token = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(token);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(null);
  };

  const value = { isLoggedIn, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => {
  return React.useContext(AuthContext);
};

export { AuthContextProvider, AuthContext };
