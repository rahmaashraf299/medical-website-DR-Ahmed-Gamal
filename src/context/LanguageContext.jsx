import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Try to load language from localStorage or default to Arabic ('ar')
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem('doctor_site_lang');
    return saved === 'en' || saved === 'ar' ? saved : 'ar';
  });

  useEffect(() => {
    // Save language selection to localStorage
    localStorage.setItem('doctor_site_lang', locale);
    
    // Update HTML attributes for layout and direction
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const toggleLanguage = () => {
    setLocale((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key) => {
    // Support nested keys like 'hero.title'
    const keys = key.split('.');
    let translationObj = translations[locale];
    
    for (const k of keys) {
      if (translationObj && translationObj[k] !== undefined) {
        translationObj = translationObj[k];
      } else {
        // Fallback to English if translation is missing in Arabic, or just key name
        let fallbackObj = translations['en'];
        for (const fk of keys) {
          if (fallbackObj && fallbackObj[fk] !== undefined) {
            fallbackObj = fallbackObj[fk];
          } else {
            fallbackObj = key;
          }
        }
        return fallbackObj;
      }
    }
    
    return translationObj;
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
