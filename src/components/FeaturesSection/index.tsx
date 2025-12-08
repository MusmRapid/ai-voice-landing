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

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative py-24 text-white">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center md:text-5xl"
        >
          Key <span className="text-yellowBrand">Features</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto mt-6 text-base text-center text-gray-300 md:text-lg"
        >
          Built for high-performance global call centers. Engineered to deliver
          accuracy, scalability, and world-class customer experiences.
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-8 transition border shadow-lg bg-white/5 border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-6 transition border w-14 h-14 rounded-xl bg-yellowBrand/20 border-yellowBrand/30 group-hover:bg-yellowBrand/30">
                  <Icon className="w-8 h-8 text-yellowBrand" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
