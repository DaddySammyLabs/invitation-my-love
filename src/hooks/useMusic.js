import { useEffect, useRef, useState } from "react";
import weddingMusic from "/sounds/LionelRichie-HowLong.mp3";

export default function useMusic() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(weddingMusic);

    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";

    audioRef.current = audio;

    const playMusic = async () => {
      try {
        audio.currentTime = 0;
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        setIsPlaying(false);
        console.log("Browser blocked autoplay");
      }
    };

    playMusic();

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);

      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Music playback error:", error);
      }
    } else {
      audio.pause();
    }
  };

  return {
    isPlaying,
    toggleMusic,
  };
}
