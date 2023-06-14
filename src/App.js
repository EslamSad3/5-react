import React, { useState } from 'react';
import AppRouter from './router/router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { LanguageContext } from './LanguageContext';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LanguageContext.Provider>
  );
};

export default App;