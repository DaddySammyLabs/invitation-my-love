import { useState } from "react";

import { Languages, X, Check } from "lucide-react";

import useLanguage from "../../hooks/useLanguage";

import styles from "./LanguageSwitcher.module.css";

const languages = [
  { code: "ru", label: "РУ", name: "Русский" },
  { code: "uz", label: "UZ", name: "O'zbekcha" },
  { code: "en", label: "EN", name: "English" },
];

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((item) => item.code === language);

  const selectLanguage = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(true)}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Languages size={18} />
        <span>{currentLanguage.label}</span>
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.close}
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2 id="language-title">{t.language.title}</h2>

            <p>{t.language.subtitle}</p>

            <div className={styles.options}>
              {languages.map((item) => (
                <button
                  key={item.code}
                  className={`${styles.option} ${
                    language === item.code ? styles.selected : ""
                  }`}
                  onClick={() => selectLanguage(item.code)}
                >
                  <span>{item.name}</span>

                  {language === item.code && <Check size={18} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LanguageSwitcher;
