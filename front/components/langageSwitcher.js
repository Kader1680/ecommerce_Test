// components/LanguageSwitcher.js
import { useRouter } from 'next/router';
import React from 'react';
const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, pathname, query } = router;
  const changeLanguage = (lng) => {
    router.push({ pathname, query }, undefined, { locale: lng });
  };
  return (
    <div>
      {locales.map((lng) => (
        <button key={lng} onClick={() => changeLanguage(lng)}>
          {lng}
        </button>
      ))}
    </div>
  );
};
export default LanguageSwitcher;
