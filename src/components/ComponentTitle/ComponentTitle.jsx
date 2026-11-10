import styles from "./ComponentTitle.module.css";

function ComponentTitle({ eyebrow, title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

      <h2 className={styles.title}>{title}</h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

export default ComponentTitle;
