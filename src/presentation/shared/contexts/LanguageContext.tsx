import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import i18n from "@i18n";

const STORAGE_KEY = "lang";
const DEFAULT_LANGUAGE = "en";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Always start with the default on both server and first client render,
  // so the hydrated HTML matches the server-rendered HTML.
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

  // After mount — safe to read localStorage and switch if needed.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) ?? DEFAULT_LANGUAGE;
    if (saved !== DEFAULT_LANGUAGE) {
      setLanguageState(saved);
      i18n.changeLanguage(saved);
    }
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
