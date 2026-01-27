import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, AudioWaveform, Sparkles } from "lucide-react";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

type Recording = {
  id: string;
  title: string;
  subtitle: string;
  src: string;
};

const recordings: Recording[] = [
  {
    id: "rec1",
    title: "Agent Capture #1",
    subtitle: "Live call capture • 01:56",
    src: "/src/assets/audio/audio-1.mp3",
  },
  {
    id: "rec2",
    title: "Agent Capture #2",
    subtitle: "Live call capture • 02:05",
    src: "/src/assets/audio/audio-2.mp3",
  },
];

const VoiceRecordings: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const [activeId, setActiveId] = useState<string>(recordings[0].id);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrubRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const updateProgress = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
    rafRef.current = requestAnimationFrame(updateProgress);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeId]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    } else {
      await audio.play();
      setPlaying(true);
      rafRef.current = requestAnimationFrame(updateProgress);
    }
  };

  const handleScrub = (e: React.MouseEvent) => {
    const audio = audioRef.current;
    const scrub = scrubRef.current;
    if (!audio || !scrub || !audio.duration) return;

    const rect = scrub.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));

    audio.currentTime = pct * audio.duration;
    setProgress(pct * 100);
  };

  return (
    <section
      id="recordings"
      className={`relative py-20 transition-colors duration-500 ${
        theme === "dark" ? "bg-black/20 text-white" : "bg-lightBg text-lightText"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-heroLeft/30 via-black/0 to-yellowBrand/20 blur-3xl" />
      <div className="relative px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="text-4xl font-bold">
              Voice Recordings
            </h2>
            <p className="mt-2 ">
              These are captured recordings from our agent in live action.
              Drag the wave to scrub and feel the flow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="text-yellowBrand" />
            <span className="text-sm ">Out of this world</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {recordings.map((rec) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className={`relative rounded-2xl p-6 backdrop-blur-xl border ${
                theme === "dark"
                  ? "bg-black/40 border-white/10"
                  : "bg-white/40 border-lightText/10"
              } ${activeId === rec.id ? "ring-2 ring-yellowBrand/60" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <AudioWaveform className="text-yellowBrand" />
                    <h3 className="text-xl font-bold">{rec.title}</h3>
                  </div>
                  <p className="mt-1 ">{rec.subtitle}</p>
                </div>

                <button
                  className={`rounded-full p-2 transition-transform ${
                    activeId === rec.id ? "scale-110" : ""
                  }`}
                  onClick={() => {
                    setActiveId(rec.id);
                    setPlaying(false);
                    setProgress(0);
                  }}
                >
                  <span>Select</span>
                </button>
              </div>

              {activeId === rec.id && (
                <div className="mt-6">
                  <audio ref={audioRef} src={rec.src} preload="metadata" />

                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={togglePlay}
                      className={`p-3 rounded-full transition ${
                        theme === "dark"
                          ? "bg-yellowBrand/20 hover:bg-yellowBrand/30"
                          : "bg-yellowBrand/20 hover:bg-yellowBrand/30"
                      }`}
                    >
                      {playing ? <Pause /> : <Play />}
                    </button>

                    <div
                      ref={scrubRef}
                      onClick={handleScrub}
                      className="relative w-full h-3 rounded-full cursor-pointer bg-white/10"
                    >
                      <div
                        style={{ width: `${progress}%` }}
                        className="absolute inset-y-0 left-0 rounded-full bg-yellowBrand/70"
                      />
                      <div
                        style={{ left: `${progress}%` }}
                        className="absolute w-4 h-4 -translate-y-1/2 rounded-full shadow-lg top-1/2 bg-white/90"
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-sm">
                    Tip: Click the wave to scrub anywhere
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceRecordings;
