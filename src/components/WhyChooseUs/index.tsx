import React from "react";
import { motion } from "framer-motion";
import { Globe, Sparkles, ServerCog, Brain } from "lucide-react";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

const items = [
  {
    title: "Built for Global Outsourcing Environments",
    icon: Globe,
    description:
      "Trusted across the Philippines, India, Sri Lanka, South Africa, and Latin America. Designed for real BPO operations with multi-shift teams, high-volume demand, and complex client expectations.",
  },
  {
    title: "Natural, Human-Level Voice Quality",
    icon: Sparkles,
    description:
      "US-neutral and international accents with emotion-aware tone, smooth pacing, and context-appropriate responses — engineered to sound convincingly human.",
  },
  {
    title: "Enterprise Scalability",
    icon: ServerCog,
    description:
      "Scale instantly from 10 to 10,000 agents with zero downtime or staffing limits. 24/7 global availability with no hiring, training, or scheduling required.",
  },
  {
    title: "Deep Intelligence for Real Call Centers",
    icon: Brain,
    description:
      "Handles objections, clarifications, branches, and logic flows flawlessly — and escalates to human agents when needed.",
  },
];

const WhyChooseUs: React.FC = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <section
      id="whychooseus"
      className={`transition-colors duration-500  ${
        theme === "dark" ? "to-black/20" : "to-lightBg"
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
          Why the World’s Top Call Centers{" "}
          <span className="text-yellowBrand">Choose Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className={`max-w-3xl mx-auto mt-6 text-base text-center md:text-lg transition-colors duration-500 ${
            theme === "dark" ? "text-gray-300" : "text-lightText/80"
          }`}
        >
          Our AI voice agents are built specifically for global BPO environments —
          delivering unmatched reliability, realism, and performance across every
          industry.
        </motion.p>

        <div className="grid gap-10 mt-16 md:grid-cols-2 lg:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 transition border shadow-lg rounded-2xl backdrop-blur-md
                  ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-lightBg/30 border-lightText/10 hover:bg-lightSecondary/20"
                  }`}
              >
                <Icon className="w-10 h-10 mb-6 text-yellowBrand" />

                <h3
                  className={`mb-4 text-xl font-semibold md:text-2xl transition-colors duration-500 ${
                    theme === "dark" ? "text-white" : "text-lightText"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`transition-colors duration-500 ${
                    theme === "dark" ? "text-gray-300" : "text-lightText/80"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
