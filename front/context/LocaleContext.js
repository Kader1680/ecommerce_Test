import React, { createContext, useState, useContext } from 'react';

// Create a Context
const LocaleContext = createContext();

// Custom hook to use the Locale Context
export const useLocale = () => useContext(LocaleContext);

// Provider component
export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en'); // default locale

  const switchLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, switchLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
