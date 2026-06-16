import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Sparkles } from "lucide-react";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

type Recording = {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  avatar: string;
  transcript: string;
  duration: number;
};

const recordings: Recording[] = [
  {
    id: "bella",
    title: "Agent Bella",
    subtitle: "Voice Sample",
    src: "/audio/Bella-front.wav",
    avatar: "/Bella.png",
    transcript: "Hi there! Thanks so much for reaching out. I'm Bella, and I'm happy to help whether you're looking to learn about our products, need sales support, or have customer service questions. What brings you in today?",
    duration: 11,
  },
  {
    id: "emma",
    title: "Agent Emma",
    subtitle: "Voice Sample",
    src: "/audio/emma-front.wav",
    avatar: "/Emma.jpg",
    transcript: "Hi, I'm emma. I'm here to help you with whatever you need—whether that's sales assistance, learning more about our products, or getting support for any questions you might have. I'm all ears!",
    duration: 12,
  },
  {
    id: "eric",
    title: "Agent Eric",
    subtitle: "Voice Sample",
    src: "/audio/eric-front.wav",
    avatar: "/eric.png",
    transcript: "Good afternoon, thank you for calling. This is Eric. I'm here to help you with sales inquiries, detailed product information, or any customer support you might need. What can I assist you with today?",
    duration: 10,
  },
  {
    id: "olivia",
    title: "Agent Olivia",
    subtitle: "Voice Sample",
    src: "/audio/olivia-front.wav",
    avatar: "/Olivia.png",
    transcript: "Hello, this is Olivia. I can help you with sales, provide you with comprehensive product information, or assist with any customer support needs. To get you the right solution quickly, what can I help you with?",
    duration: 12,
  },
  {
    id: "amanda",
    title: "Agent Amanda",
    subtitle: "Voice Sample",
    src: "/audio/amanda_intro_v1.wav",
    avatar: "/Amanda.png",
    transcript: "Hi, I'm Amanda, a Senior Medicare Outreach Specialist. How are you doing today?",
    duration: 4,
  },
  {
    id: "angela",
    title: "Agent Angela",
    subtitle: "Voice Sample",
    src: "/audio/angela_intro_v1.wav",
    avatar: "/Angela.png",
    transcript: "Hi, I'm Angela, a Senior Medicare Outreach Specialist. How are you doing today?",
    duration: 3,
  },
  {
    id: "clara",
    title: "Agent Clara",
    subtitle: "Voice Sample",
    src: "/audio/clara_intro_v1.wav",
    avatar: "/Clara.png",
    transcript: "This is Clara from US Auto-Care. I'm reaching out to see if we help you save on your auto insurance.",
    duration: 5,
  },
  {
    id: "heather",
    title: "Agent Heather",
    subtitle: "Voice Sample",
    src: "/audio/heather_intro_v1.wav",
    avatar: "/Heather.png",
    transcript: "Hi, I'm Heather, a Senior Medicare Outreach Specialist. How are you doing today?",
    duration: 3,
  },
  {
    id: "lauren",
    title: "Agent Lauren",
    subtitle: "Voice Sample",
    src: "/audio/lauren_intro_v1.wav",
    avatar: "/Lauran.png",
    transcript: "Hi, I'm Lauren, a Senior Medicare Outreach Specialist. How are you doing today?",
    duration: 5,
  },
  {
    id: "megan",
    title: "Agent Megan",
    subtitle: "Voice Sample",
    src: "/audio/megan_intro_v1.wav",
    avatar: "/Megan.png",
    transcript: "Hi, I'm Megan, a Senior Medicare Outreach Specialist. How are you doing today?",
    duration: 3,
  },
  {
    id: "mia",
    title: "Agent Mia",
    subtitle: "Voice Sample",
    src: "/audio/mia_intro_v1.wav",
    avatar: "/Mia.png",
    transcript: "Hi, I'm Mia, a Senior Medicare Outreach Specialist. How are you doing today?",
    duration: 4,
  },
  {
    id: "sophia",
    title: "Agent Sophia",
    subtitle: "Voice Sample",
    src: "/audio/sophia_intro_v1.wav",
    avatar: "/Sophia.png",
    transcript: "Hi, I'm Sophia, a Senior Medicare Outreach Specialist. How are you doing today?",
    duration: 5,
  },
  {
    id: "zara",
    title: "Agent Zara",
    subtitle: "Voice Sample",
    src: "/audio/zara_intro_v1.wav",
    avatar: "/Zara.png",
    transcript: "This is Zara from Accident Management Services. We help verify accident details and check if any compensation is available.",
    duration: 6,
  },
];

const VoiceRecordings: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrubRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const activeRecording = activeId ? recordings.find((r) => r.id === activeId) : null;

  const updateProgress = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.duration && !isNaN(audio.duration)) {
      const newProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(Math.min(100, Math.max(0, newProgress)));
      setCurrentTime(Math.floor(audio.currentTime));
    }
    rafRef.current = requestAnimationFrame(updateProgress);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Reset progress when audio changes
    setProgress(0);
    setCurrentTime(0);

    const onLoadedMetadata = () => {
      // Ensure progress is set to 0 when metadata loads
      setProgress(0);
      setCurrentTime(0);
    };

    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
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
      className={`relative py-20 md:py-24 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-black/20 text-white"
          : "bg-lightBg text-lightText"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-heroLeft/30 via-black/0 to-yellowBrand/20 blur-3xl" />
      <div className="relative px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">Meet Our AI Agents</h2>
              <p className="mt-3 md:text-lg">
                Listen to the natural-sounding voices of our AI agents. Each agent is
                tailored to deliver exceptional customer experiences across diverse
                call center operations.
              </p>
            </div>
            <div className="flex items-center flex-shrink-0 gap-3">
              <Sparkles className="text-yellowBrand" />
              <span className="text-sm whitespace-nowrap">Out of this world</span>
            </div>
          </div>
        </motion.div>

        {/* Voice Selection Grid */}
        <div className="grid gap-4 mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recordings.reduce<React.ReactNode[]>((elements, rec, index) => {
            const button = (
              <motion.button
                key={rec.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  if (activeId === rec.id) {
                    if (showPlayer) {
                      audioRef.current?.pause();
                      setPlaying(false);
                      setShowPlayer(false);
                      setProgress(0);
                      setCurrentTime(0);
                    } else {
                      setShowPlayer(true);
                    }
                  } else {
                    audioRef.current?.pause();
                    setActiveId(rec.id);
                    setShowPlayer(true);
                    setPlaying(false);
                    setProgress(0);
                    setCurrentTime(0);
                  }
                }}
                className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 flex flex-col items-center gap-3 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-yellowBrand/50"
                    : "bg-lightBg/30 border-lightText/10 hover:bg-lightSecondary/20 hover:border-yellowBrand/50"
                } ${
                  activeId === rec.id
                    ? "ring-2 ring-yellowBrand/60 " +
                      (theme === "dark"
                        ? "bg-white/10 border-yellowBrand/50"
                        : "bg-lightSecondary/20 border-yellowBrand/50")
                    : ""
                }`}
              >
                <img
                  src={rec.avatar}
                  alt={rec.title}
                  className="object-cover border-2 rounded-full w-14 h-14 border-yellowBrand/50"
                />
                <div className="text-center min-h-[50px] flex flex-col justify-center">
                  <h4 className="text-sm font-semibold">{rec.title}</h4>
                  <p className={`text-xs transition-colors duration-500 ${
                    theme === "dark" ? "text-gray-400" : "text-lightText/60"
                  }`}>
                    {rec.subtitle}
                  </p>
                </div>
              </motion.button>
            );

            elements.push(button);

            if (showPlayer && activeId === rec.id && activeRecording) {
              elements.push(
                <motion.div
                  key={`${rec.id}-player`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`col-span-full rounded-2xl p-6 md:p-8 backdrop-blur-xl border ${
                    theme === "dark"
                      ? "bg-black/40 border-white/10"
                      : "bg-white/40 border-lightText/10"
                  }`}
                >
                  <audio ref={audioRef} src={activeRecording.src} preload="metadata" />

                  {/* Player Header */}
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={activeRecording.avatar}
                        alt={activeRecording.title}
                        className="object-cover w-16 h-16 border-2 rounded-full md:w-20 md:h-20 border-yellowBrand/50"
                      />
                      <div>
                        <h3 className="text-xl font-bold md:text-2xl">{activeRecording.title}</h3>
                        <p className={`mt-1 text-sm transition-colors duration-500 ${
                          theme === "dark" ? "text-gray-400" : "text-lightText/60"
                        }`}>
                          {activeRecording.subtitle}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={togglePlay}
                      className="relative flex items-center justify-center w-16 h-16 text-black transition-transform rounded-full shadow-xl bg-yellowBrand hover:scale-110"
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

                  {/* Progress Bar */}
                  <div className="mt-8">
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
                    <div className="flex items-center justify-between mt-2 text-xs text-lightText/70">
                      <span>{currentTime}s / {activeRecording.duration}s</span>
                      <span>Click the bar to scrub</span>
                    </div>
                  </div>

                  {/* Transcript */}
                  <div className={`p-4 md:p-6 mt-8 rounded-lg ${
                    theme === "dark" ? "bg-black/10" : "bg-white/10"
                  }`}>
                    <p className="text-sm leading-relaxed md:text-base">
                      {activeRecording.transcript.split(' ').map((word, index) => {
                        const words = activeRecording.transcript.split(' ');
                        const revealIndex = Math.floor((progress / 100) * words.length);
                        return (
                          <span
                            key={index}
                            className={`transition-opacity duration-300 ${
                              index <= revealIndex ? 'opacity-100' : 'opacity-30'
                            }`}
                          >
                            {word}{' '}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return elements;
          }, [])}
        </div>
      </div>
    </section>  );
};

export default VoiceRecordings;
