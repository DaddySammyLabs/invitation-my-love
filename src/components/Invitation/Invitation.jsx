import ComponentTitle from "../ComponentTitle/ComponentTitle";

import useLanguage from "@/hooks/useLanguage";
import useScrollAnimation from "@/hooks/useScrollAnimation";

import styles from "./Invitation.module.css";

function Invitation() {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    // <section className={styles.invitation} id="invitation">
    <section
      className={`${styles.invitation} ${isVisible ? styles.visible : ""}`}
      id="invitation"
      ref={elementRef}
    >
      <div className={styles.decorTop}>✿</div>

      <div className={styles.content}>
        <ComponentTitle
          eyebrow={t.invitation.eyebrow}
          title={t.invitation.title}
        />

        <div className={styles.flower}>❀</div>

        <p className={styles.description}>{t.invitation.description}</p>

        <p className={styles.message}>{t.invitation.message}</p>

        <div className={styles.signature}>
          <span>{t.invitation.signature}</span>

          <span className={styles.names}>Alex & Anna</span>
        </div>

        <p className={styles.closing}>{t.invitation.closing}</p>
      </div>

      <div className={styles.decorBottom}>✿</div>
    </section>
  );
}

export default Invitation;
