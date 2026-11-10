// src/useAppState.js

// import useLanguage from "./hooks/useLanguage";

import useSound from "./hooks/useSound";

// import useVideo from "./hooks/useVideo";

const useAppState = () => {
  // const { language, setLanguage } = useLanguage();

  const { playSong, togglePlaySong, isPlaying } = useSound();

  return {
    // language,
    // setLanguage,

    // isLanguageModalOpen,
    // closeLanguageModal,

    playSong,
    togglePlaySong,
    isPlaying,
  };
};

export default useAppState;
