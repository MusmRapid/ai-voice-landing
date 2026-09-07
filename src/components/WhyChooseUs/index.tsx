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
  const isDark = theme === "dark";

  return (
    <section
      id="whychooseus"
      className={`relative overflow-hidden transition-colors duration-500 ${
        isDark ? "text-white" : "text-lightText"
      }`}
    >
      <div className="px-6 mx-auto max-w-7xl md:px-12">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className={`mb-8 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.24em] ${
                isDark ? "text-white/45" : "text-lightText/50"
              }`}
            >
              <span className="w-8 h-px bg-yellowBrand" />
              01 / Why Humalogue
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="m-0 max-w-xl text-left text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl"
            >
              Intelligence that holds its shape under pressure.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className={`mt-8 max-w-md text-base leading-relaxed ${
                isDark ? "text-white/55" : "text-lightText/65"
              }`}
            >
              Built for the moments where volume, nuance, and reliability all
              matter at once. No theatre. Just a voice layer that keeps working.
            </motion.p>
          </div>

          <div className="border-t border-current/15">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover="hover"
                  className={`group relative grid gap-5 border-b border-current/15 py-8 md:grid-cols-[4rem_minmax(0,1fr)_auto] md:items-start md:gap-8 md:py-10 ${
                    isDark ? "hover:bg-white/[0.025]" : "hover:bg-black/[0.025]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-[0.2em] ${
                      isDark ? "text-white/35" : "text-lightText/40"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="m-0 max-w-lg text-2xl font-medium leading-tight tracking-[-0.035em] md:text-3xl">
                      {item.title}
                    </h3>
                    <motion.p
                      variants={{
                        hover: { opacity: 1, y: 0, transition: { duration: 0.25 } },
                      }}
                      initial={{ opacity: 0.62, y: 4 }}
                      className={`mt-4 max-w-xl text-sm leading-relaxed md:text-base ${
                        isDark ? "text-white/55" : "text-lightText/65"
                      }`}
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  <motion.div
                    variants={{
                      hover: { rotate: 10, scale: 1.08, color: "#d7ff48" },
                    }}
                    transition={{ duration: 0.25 }}
                    className="hidden md:block"
                  >
                    <Icon className="w-6 h-6 text-yellowBrand/80" strokeWidth={1.5} />
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.h2
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-8 hidden text-[13rem] font-bold leading-none tracking-[-0.12em] text-current/[0.025] lg:block"
        >
          01
        </motion.h2>
      </div>
    </section>
  );
};

export default WhyChooseUs;
