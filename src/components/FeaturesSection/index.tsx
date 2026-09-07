import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  MessageSquare,
  Users,
  LineChart,
  PlugZap,
  PhoneCall,
} from "lucide-react";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

const features = [
  {
    icon: Cpu,
    title: "Fully Autonomous Voice Agents",
    description:
      "Inbound and outbound voice agents that handle calls end-to-end with human-like fluency, accuracy, and reliability.",
  },
  {
    icon: MessageSquare,
    title: "Smart Objection Handling",
    description:
      "Understands context, clarifies intent, overcomes objections naturally, and keeps conversations flowing smoothly.",
  },
  {
    icon: Users,
    title: "Global Accent Support",
    description:
      "US Neutral, UK English, International English, and fully custom enterprise voice profiles for maximum realism.",
  },
  {
    icon: LineChart,
    title: "Real-Time Dashboard & Insights",
    description:
      "Live monitoring, call recordings, sentiment analysis, transcriptions, and actionable performance insights.",
  },
  {
    icon: PlugZap,
    title: "Seamless BPO Integrations",
    description:
      "Connects instantly with Vicidial, GoAutoDial, Five9, Avaya, Zoho, Salesforce, HubSpot, Genesys, and more.",
  },
  {
    icon: PhoneCall,
    title: "Instant Human Escalation",
    description:
      "Transfers qualified or complex calls to human agents anywhere in the world when escalation is required.",
  },
];

const FeatureCard: React.FC<{
  feature: (typeof features)[number];
  theme: "light" | "dark";
}> = ({ feature, theme }) => {
  const Icon = feature.icon;

  return (
    <article
      className={`feature-marquee-card group border transition ${
        theme === "dark"
          ? "border-white/10 bg-white/5 hover:border-yellowBrand/50 hover:bg-white/10"
          : "border-lightText/10 bg-lightBg/30 hover:border-yellowBrand/50 hover:bg-lightSecondary/20"
      }`}
    >
      <div className="mb-8 flex h-14 w-14 items-center justify-center border border-yellowBrand/30 bg-yellowBrand/20 transition group-hover:bg-yellowBrand/30">
        <Icon className="h-8 w-8 text-yellowBrand" />
      </div>

      <h3
        className={`mb-4 text-xl font-semibold transition-colors duration-500 md:text-2xl ${
          theme === "dark" ? "text-white" : "text-lightText"
        }`}
      >
        {feature.title}
      </h3>

      <p
        className={`transition-colors duration-500 ${
          theme === "dark" ? "text-gray-300" : "text-lightText/80"
        }`}
      >
        {feature.description}
      </p>
    </article>
  );
};

const FeaturesSection: React.FC = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <section
      id="features"
      className={`transition-colors duration-500 py-24 ${
        theme === "dark" ? "text-white" : "text-lightText"
      }`}
    >
      <div className="px-6 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold text-center md:text-5xl transition-colors duration-500 ${
            theme === "dark" ? "text-white" : "text-lightText"
          }`}
        >
          Key <span className="text-yellowBrand">Features</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`max-w-3xl mx-auto mt-6 text-base text-center md:text-lg transition-colors duration-500 ${
            theme === "dark" ? "text-gray-300" : "text-lightText/80"
          }`}
        >
          Built for high-performance global call centers. Engineered to deliver
          accuracy, scalability, and world-class customer experiences.
        </motion.p>

        <div className="feature-marquee mt-16" aria-label="Key features">
          <motion.div
            className="feature-marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 72,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="feature-marquee-group">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} theme={theme} />
              ))}
            </div>
            <div className="feature-marquee-group" aria-hidden="true">
              {features.map((feature) => (
                <FeatureCard key={`duplicate-${feature.title}`} feature={feature} theme={theme} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
