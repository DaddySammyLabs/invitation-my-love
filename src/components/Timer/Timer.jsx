import ComponentTitle from "../ComponentTitle/ComponentTitle";

import useCountdown from "../../hooks/useCountdown";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useLanguage from "../../hooks/useLanguage";

import styles from "./Timer.module.css";

const WEDDING_DATE = "2027-06-20T00:00:00";

function Timer() {
  const { t } = useLanguage();

  const { days, hours, minutes, seconds, isFinished } =
    useCountdown(WEDDING_DATE);

  const { elementRef, isVisible } = useScrollAnimation();

  const timeUnits = [
    {
      value: days,
      label: t.timer.days,
    },
    {
      value: hours,
      label: t.timer.hours,
    },
    {
      value: minutes,
      label: t.timer.minutes,
    },
    {
      value: seconds,
      label: t.timer.seconds,
    },
  ];

  return (
    <section
      className={`${styles.timer} ${isVisible ? styles.visible : ""}`}
      id="timer"
      ref={elementRef}
    >
      <div className={styles.content}>
        <ComponentTitle
          eyebrow={t.timer.eyebrow}
          title={t.timer.title}
          subtitle={t.timer.subtitle}
        />

        <div className={styles.flower}>✿</div>

        {isFinished ? (
          <div className={styles.finished}>{t.timer.finished}</div>
        ) : (
          <div className={styles.countdown}>
            {timeUnits.map((unit, index) => (
              <div className={styles.timeItem} key={unit.label}>
                <div className={styles.number}>
                  {String(unit.value).padStart(2, "0")}
                </div>

                <span className={styles.label}>{unit.label}</span>

                {index !== timeUnits.length - 1 && (
                  <span className={styles.separator}>:</span>
                )}
              </div>
            ))}
          </div>
        )}

        <p className={styles.bottomText}>{t.timer.bottom}</p>
      </div>

      <div className={styles.decorLeft}>❀</div>
      <div className={styles.decorRight}>✿</div>
    </section>
  );
}

export default Timer;
