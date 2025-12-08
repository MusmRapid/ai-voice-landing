import React from "react";
import { motion } from "framer-motion";
import { Globe, Sparkles, ServerCog, Brain } from "lucide-react";

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
  return (
    <section
      id="whychooseus"
      className="relative py-24 text-white bg-gradient-to-b from-transparent to-black/20"
    >
      <div className="px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center md:text-5xl"
        >
          Why the World’s Top Call Centers{" "}
          <span className="text-yellowBrand">Choose Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-3xl mx-auto mt-6 text-base text-center text-gray-300 md:text-lg"
        >
          Our AI voice agents are built specifically for global BPO environments —
          delivering unmatched reliability, realism, and performance across every
          industry.
        </motion.p>

        {/* Cards */}
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
                className="p-8 transition border shadow-lg bg-white/5 border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10"
              >
                <Icon className="w-10 h-10 mb-6 text-yellowBrand" />

                <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">
                  {item.title}
                </h3>

                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
