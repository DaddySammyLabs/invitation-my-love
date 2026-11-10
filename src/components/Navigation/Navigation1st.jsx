import { useState } from "react";

import {
  House,
  Mail,
  Clock,
  MapPin,
  CalendarDays,
  Images,
  MessageCircle,
  Languages,
  X,
  Check,
} from "lucide-react";

import styles from "./Navigation.module.css";

import useNavigation from "../../hooks/useNavigation";

const navigationItems = [
  { id: "home", icon: House, label: "Home" },
  { id: "invitation", icon: Mail, label: "Invite" },
  { id: "timer", icon: Clock, label: "Timer" },
  { id: "location", icon: MapPin, label: "Location" },
  { id: "program", icon: CalendarDays, label: "Program" },
  { id: "photos", icon: Images, label: "Photos" },
  { id: "rsvp", icon: MessageCircle, label: "RSVP" },
];

const languages = [
  { code: "ru", label: "РУ", name: "Русский" },
  { code: "uz", label: "UZ", name: "O'zbekcha" },
  { code: "en", label: "EN", name: "English" },
];

function Navigation() {
  const { activeSection, scrollToSection } = useNavigation();

  const [language, setLanguage] = useState("ru");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const currentLanguage = languages.find((item) => item.code === language);

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setIsLanguageOpen(false);
  };

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.menu}>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                aria-current={isActive ? "location" : undefined}
              >
                <Icon size={19} strokeWidth={1.7} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <button
            className={`${styles.navItem} ${styles.languageButton}`}
            onClick={() => setIsLanguageOpen(true)}
            aria-label="Select language"
            aria-expanded={isLanguageOpen}
          >
            <Languages size={19} strokeWidth={1.7} />
            <span>{currentLanguage.label}</span>
          </button>
        </div>
      </nav>

      {isLanguageOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsLanguageOpen(false)}
        >
          <div
            className={styles.languageModal}
            role="dialog"
            aria-modal="true"
            aria-label="Choose language"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsLanguageOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2>Choose Language</h2>

            <p>Select your preferred language</p>

            <div className={styles.languageList}>
              {languages.map((item) => (
                <button
                  key={item.code}
                  className={styles.languageOption}
                  onClick={() => handleLanguageChange(item.code)}
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

export default Navigation;
