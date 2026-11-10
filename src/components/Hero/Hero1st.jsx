import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/images/couple2.jpeg"
          alt="Wedding couple"
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.subtitle}>Together with our families</span>

        <h1 className={styles.names}>
          Alex <span>&</span> Anna
        </h1>

        <div className={styles.divider}>
          <span />
          <span className={styles.flower}>✿</span>
          <span />
        </div>

        <p className={styles.description}>
          INVITE YOU TO CELEBRATE
          <br />
          OUR WEDDING DAY
        </p>

        <p className={styles.date}>20 . 06 . 2027</p>

        <span className={styles.bottomText}>A BEAUTIFUL BEGINNING</span>
      </div>

      <div className={styles.scrollIndicator}>
        <span />
        <p>SCROLL TO EXPLORE</p>
      </div>
    </section>
  );
}

export default Hero;
