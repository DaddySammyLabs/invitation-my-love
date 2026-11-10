import { createContext, useState, useMemo } from "react";

import texts from "../locales/texts";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ru");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: texts[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
