import { Heart, Pause, Play, Flower2 } from "lucide-react";

import useLanguage from "../../hooks/useLanguage";
import { useApp } from "@/context/AppContext";

import styles from "./Footer.module.css";

function Footer() {
  const { t } = useLanguage();

  const { togglePlaySong, isPlaying } = useApp();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <Flower2 className={styles.flower} size={30} strokeWidth={1} />

        <p className={styles.eyebrow}>{t.footer.eyebrow}</p>

        <h2 className={styles.names}>{t.footer.names}</h2>

        <div className={styles.divider}>
          <span />
          <Heart size={18} strokeWidth={1.3} />
          <span />
        </div>

        <p className={styles.date}>{t.footer.date}</p>

        <p className={styles.message}>{t.footer.message}</p>

        <div className={styles.musicWrapper}>
          <button
            type="button"
            className={`${styles.musicButton} ${
              isPlaying ? styles.musicPlaying : ""
            }`}
            onClick={togglePlaySong}
            aria-label={isPlaying ? t.footer.pauseMusic : t.footer.playMusic}
            aria-pressed={isPlaying}
          >
            {isPlaying ? <Pause size={19} /> : <Play size={19} />}
          </button>
        </div>

        <div className={styles.bottom}>
          <p>{t.footer.copyright}</p>

          <Heart size={13} fill="currentColor" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
