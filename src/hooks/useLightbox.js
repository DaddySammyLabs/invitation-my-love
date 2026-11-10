import { useEffect, useState } from "react";

export default function useLightbox() {
  const [activeImage, setActiveImage] = useState(null);

  const openImage = (image) => {
    setActiveImage(image);
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImage();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return {
    activeImage,
    openImage,
    closeImage,
  };
}
