import React, { createContext, useContext, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { translations, Language, languages } from "./translations";

interface LanguageContextType {
  language: Language;
  t: typeof translations.en;
  setLanguage: (lang: Language) => void;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const language: Language = (lang as Language) || "en";
  
  const t = useMemo(() => {
    return translations[language] || translations.en;
  }, [language]);

  const setLanguage = (newLang: Language) => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace(`/${language}/`, `/${newLang}/`);
    navigate(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
