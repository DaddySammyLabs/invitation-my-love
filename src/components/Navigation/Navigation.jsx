import {
  House,
  Mail,
  Clock,
  MapPin,
  CalendarDays,
  Images,
  MessageCircle,
  Shirt,
} from "lucide-react";

import styles from "./Navigation.module.css";

import useNavigation from "../../hooks/useNavigation";
import useLanguage from "../../hooks/useLanguage";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const navigationItems = [
  { id: "home", icon: House, key: "home" },
  { id: "invitation", icon: Mail, key: "invitation" },
  { id: "timer", icon: Clock, key: "timer" },
  { id: "location", icon: MapPin, key: "location" },
  { id: "program", icon: CalendarDays, key: "program" },
  { id: "photos", icon: Images, key: "photos" },
  { id: "dresscode", icon: Shirt, key: "dresscode" },
  { id: "rsvp", icon: MessageCircle, key: "rsvp" },
];

function Navigation() {
  const { activeSection, scrollToSection } = useNavigation();
  const { t } = useLanguage();

  return (
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
              aria-label={t.navigation[item.key]}
              aria-current={isActive ? "location" : undefined}
            >
              <Icon size={19} strokeWidth={1.7} />

              <span>{t.navigation[item.key]}</span>
            </button>
          );
        })}

        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navigation;
