import React from 'react';
import { ThemeProvider } from './Context/ThemeContext.jsx';
import { DoctorProvider } from './Context/DoctorContext.jsx';
import AppRouter from './Routes/AppRouter.jsx'

function App() {
  return (
    <ThemeProvider>
      <DoctorProvider>
        <AppRouter />
      </DoctorProvider>
    </ThemeProvider>
  );
}

export default App;