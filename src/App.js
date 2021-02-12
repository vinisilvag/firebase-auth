import React from 'react';

import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './contexts/AuthContext';
import { FirebaseProvider } from './contexts/FirebaseContext';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <FirebaseProvider>
        <GlobalStyles />
        <Routes />
        <ToastContainer />
      </FirebaseProvider>
    </AuthProvider>
  );
}

export default App;
