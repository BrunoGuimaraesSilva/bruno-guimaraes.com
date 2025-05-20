import React, { createContext, useContext, useState, useEffect } from "react";

import i18n from "i18next";

const LanguageContext = createContext({
  language: "en",
  setLanguage: (_: string) => {},
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || i18n.language || "en";
    }
    return "en";
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
