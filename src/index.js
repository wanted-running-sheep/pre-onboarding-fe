import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <AuthContextProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
