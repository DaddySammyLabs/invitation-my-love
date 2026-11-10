import styles from "./Hero.module.css";
import useLanguage from "../../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero} id="home">
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/images/couple.jpeg"
          alt="Wedding couple"
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.subtitle}>{t.hero.subtitle}</span>

        <h1 className={styles.names}>
          Alex <span>&</span> Anna
        </h1>

        <div className={styles.divider}>
          <span />
          <span className={styles.flower}>✿</span>
          <span />
        </div>

        <p className={styles.description}>
          {t.hero.invitation}
          <br />
          {t.hero.celebration}
        </p>

        <p className={styles.date}>20 . 06 . 2027</p>

        <span className={styles.bottomText}>{t.hero.bottom}</span>
      </div>

      <div className={styles.scrollIndicator}>
        <span />
        <p>SCROLL TO EXPLORE</p>
      </div>
    </section>
  );
}

export default Hero;
