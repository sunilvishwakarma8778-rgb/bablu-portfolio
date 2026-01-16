import { useEffect, useRef } from "react";

const IntroEffect = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Mobile + browser policy fix
    const playIntro = () => {
      // vibration (mobile supported)
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
      }

      // sound play
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          console.log("Autoplay blocked, user interaction needed");
        });
      }

      window.removeEventListener("click", playIntro);
    };

    // user ke first click par sound play hoga
    window.addEventListener("click", playIntro);

    return () => {
      window.removeEventListener("click", playIntro);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/intro.mp3"
      preload="auto"
    />
  );
};

export default IntroEffect;
