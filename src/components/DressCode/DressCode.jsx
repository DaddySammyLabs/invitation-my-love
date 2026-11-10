import { Sparkles, Heart } from "lucide-react";

import ComponentTitle from "../ComponentTitle/ComponentTitle";

import useLanguage from "../../hooks/useLanguage";
import useScrollAnimation from "../../hooks/useScrollAnimation";

import styles from "./DressCode.module.css";

const colors = [
  "#702B38",
  "#B76E79",
  "#E8D8C8",
  "#D9C5A5",
  "#A8AD91",
  "#8B7063",
];

const outfits = [
  {
    id: 1,
    src: "/images/dresscode_girls1.jpeg",
    alt: "Elegant wedding dress",
  },
  {
    id: 2,
    src: "/images/dresscode_mans.jpeg",
    alt: "Elegant formal outfit",
  },
  {
    id: 3,
    src: "/images/dresscode_girls2.jpeg",
    alt: "Romantic evening dress",
  },
];

function DressCode() {
  const { t } = useLanguage();

  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      className={`${styles.dressCode} ${isVisible ? styles.visible : ""}`}
      id="dresscode"
      ref={elementRef}
    >
      <div className={styles.container}>
        <ComponentTitle
          eyebrow={t.dressCode.eyebrow}
          title={t.dressCode.title}
          subtitle={t.dressCode.subtitle}
        />

        <div className={styles.palette}>
          {colors.map((color, index) => (
            <div
              key={color}
              className={styles.colorItem}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>

        <p className={styles.paletteText}>{t.dressCode.palette}</p>

        <div className={styles.outfits}>
          {outfits.map((outfit) => (
            <div className={styles.outfit} key={outfit.id}>
              <img src={outfit.src} alt={outfit.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <Sparkles size={22} strokeWidth={1.5} />

          <p>{t.dressCode.note}</p>

          <Heart size={19} strokeWidth={1.5} />
        </div>

        <p className={styles.closing}>{t.dressCode.closing}</p>
      </div>
    </section>
  );
}

export default DressCode;
