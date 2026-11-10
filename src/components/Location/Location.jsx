import { MapPin, Navigation, ExternalLink } from "lucide-react";

import ComponentTitle from "../ComponentTitle/ComponentTitle";

import useLanguage from "../../hooks/useLanguage";
import useScrollAnimation from "../../hooks/useScrollAnimation";

import styles from "./Location.module.css";

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.7626020365574!2d64.42687597607837!3d39.76172010394903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e4b8e2a!2sAllama%20Muhammad%20Iqbal%20Street%2C%207%2C%20Bukhara%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1624271234567!5m2!1sen!2s";

const YANDEX_MAPS =
  "https://yandex.com/maps/?ol=geo&text=Allama%20Muhammad%20Iqbal%20Street,%207&sll=64.426876,39.761720&sspn=0.006337,0.008211";

const GOOGLE_MAPS =
  "https://www.google.com/maps/search/?api=1&query=39.761720%2C64.426876";

function Location() {
  const { t } = useLanguage();

  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      className={`${styles.location} ${isVisible ? styles.visible : ""}`}
      id="location"
      ref={elementRef}
    >
      <div className={styles.container}>
        <ComponentTitle
          eyebrow={t.location.eyebrow}
          title={t.location.title}
          subtitle={t.location.subtitle}
        />

        <div className={styles.venue}>
          <div className={styles.venueInfo}>
            <div className={styles.icon}>
              <MapPin size={23} />
            </div>

            <h3>Sahid Zarafshon</h3>

            <p className={styles.address}>{t.location.address}</p>

            <p className={styles.description}>{t.location.description}</p>

            <div className={styles.buttons}>
              <a
                href={GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.googleButton}
              >
                <ExternalLink size={17} />
                Google Maps
              </a>

              <a
                href={YANDEX_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.yandexButton}
              >
                <Navigation size={17} />
                MapYandex
              </a>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              src={GOOGLE_MAPS_EMBED}
              title="Sahid Zarafshon Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
