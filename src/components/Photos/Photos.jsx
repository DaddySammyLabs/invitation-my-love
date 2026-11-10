import { X, Images } from "lucide-react";

import ComponentTitle from "../ComponentTitle/ComponentTitle";

import useLanguage from "../../hooks/useLanguage";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useLightbox from "../../hooks/useLightbox";

import styles from "./Photos.module.css";
const photos = [
  {
    id: 1,
    src: "/images/couple2.jpeg",
    alt: "Wedding celebration",
  },
  {
    id: 2,
    src: "/images/wedding_moments.jpeg",
    alt: "Wedding couple",
  },
  {
    id: 3,
    src: "/images/wedding_moments1.jpeg",
    alt: "Romantic wedding",
  },
  {
    id: 4,
    src: "/images/wedding_moments2.jpeg",
    alt: "Wedding photography",
  },
  {
    id: 5,
    src: "/images/wedding_moments3.jpeg",
    alt: "Wedding flowers",
  },
  {
    id: 6,
    src: "/images/couple.jpeg",
    alt: "Wedding moments",
  },
];

function Photos() {
  const { t } = useLanguage();

  const { elementRef, isVisible } = useScrollAnimation();

  const { activeImage, openImage, closeImage } = useLightbox();

  return (
    <section
      className={`${styles.photos} ${isVisible ? styles.visible : ""}`}
      id="photos"
      ref={elementRef}
    >
      <div className={styles.container}>
        <ComponentTitle
          eyebrow={t.photos.eyebrow}
          title={t.photos.title}
          subtitle={t.photos.subtitle}
        />

        <div className={styles.gallery}>
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              className={`${styles.photoItem} ${styles[`photo${index + 1}`]}`}
              onClick={() => openImage(photo)}
              aria-label={`${t.photos.openPhoto} ${index + 1}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />

              <div className={styles.photoOverlay}>
                <Images size={24} />
              </div>
            </button>
          ))}
        </div>

        <p className={styles.galleryFooter}>{t.photos.footer}</p>
      </div>

      {activeImage && (
        <div
          className={styles.lightbox}
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label={t.photos.title}
        >
          <button
            className={styles.closeButton}
            onClick={closeImage}
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          <img
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Photos;
