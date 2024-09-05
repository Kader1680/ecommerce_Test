// contexts/TranslationContext.js
import { createContext, useContext, useState } from 'react';
import en from '../public/locales/en/common.json';
import ar from '../public/locales/ar/common.json';

const translations = { en, ar };

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [locale, setLocale] = useState('en');

  const t = (key) => translations[locale][key] || key;

  const changeLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <TranslationContext.Provider value={{ t, changeLanguage, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);
