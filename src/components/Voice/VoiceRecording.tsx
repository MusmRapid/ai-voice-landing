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
    title: "Agent Rachel",
    subtitle: "Live call capture • 01:11",
    src: "/audio/audio-main.mp3",
  },
  {
    id: "rec2",
    title: "Agent Franky",
    subtitle: "Live call capture • 02:45",
    src: "/audio/audio-1.mp3",
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

  const activeRecording = recordings.find((r) => r.id === activeId)!;

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
      className={`relative py-20 md:mt-10 mt-2 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-black/20 text-white"
          : "bg-lightBg text-lightText"
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
            <h2 className="text-4xl font-bold">Voice Recordings</h2>
            <p className="mt-2 ">
              These are captured recordings from our agent in live action. Click
              a recording to load it in the player.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="text-yellowBrand" />
            <span className="text-sm ">Out of this world</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-2 space-y-4">
            {recordings.map((rec) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`rounded-2xl p-5 backdrop-blur-xl border flex items-center justify-between gap-4 cursor-pointer ${
                  theme === "dark"
                    ? "bg-black/30 border-white/10"
                    : "bg-white/30 border-lightText/10"
                } ${activeId === rec.id ? "ring-2 ring-yellowBrand/60" : ""}`}
                onClick={() => {
                  setActiveId(rec.id);
                  setPlaying(false);
                  setProgress(0);
                }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <AudioWaveform className="text-yellowBrand" />
                    <h4 className="font-bold">{rec.title}</h4>
                  </div>
                  <p className="mt-1 text-lightText/70">{rec.subtitle}</p>
                </div>

                <span className="text-sm text-lightText/70">
                  {activeId === rec.id ? "Playing" : ""}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`col-span-1 rounded-2xl p-6 backdrop-blur-xl border ${
              theme === "dark"
                ? "bg-black/40 border-white/10"
                : "bg-white/40 border-lightText/10"
            }`}
          >
            <audio
              ref={audioRef}
              src={activeRecording.src}
              preload="metadata"
            />

            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <AudioWaveform className="text-yellowBrand" />
                  <h3 className="text-xl font-bold">{activeRecording.title}</h3>
                </div>
                <p className="mt-1 text-lightText/70">
                  {activeRecording.subtitle}
                </p>
              </div>

              <button
                onClick={togglePlay}
                className="relative flex items-center justify-center w-16 h-16 text-black rounded-full shadow-xl bg-yellowBrand"
              >
                {playing ? <Pause size={28} /> : <Play size={28} />}
                {playing && (
                  <motion.span
                    className="absolute inset-0 border-2 rounded-full border-yellowBrand"
                    animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                )}
              </button>
            </div>

            <div className="mt-6">
              <div
                ref={scrubRef}
                onClick={handleScrub}
                className="relative w-full h-2 rounded-full cursor-pointer bg-gray-400/20"
              >
                <div
                  style={{ width: `${progress}%` }}
                  className="absolute inset-y-0 left-0 rounded-full bg-yellowBrand"
                />
              </div>
              <div className="mt-2 text-xs text-lightText/70">
                Tip: Click the bar to scrub
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoiceRecordings;
