import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChartLine, UserCheck, Clock, DollarSign, Repeat, Laptop, Headphones, User, Clock as ClockIcon } from "lucide-react";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

const advantages = [
  { title: "Reduce dependency on human agents", description: "AI handles large volumes of repetitive, predictable interactions.", icon: <UserCheck size={28} className="text-yellowBrand" /> },
  { title: "No hardware or infrastructure needed", description: "Eliminate new workstation, headset, and seating costs.", icon: <ChartLine size={28} className="text-yellowBrand" /> },
  { title: "Zero turnover, zero training", description: "AI eliminates staffing instability and continuously improves.", icon: <Repeat size={28} className="text-yellowBrand" /> },
  { title: "Higher productivity per agent seat", description: "Run unlimited concurrent calls across multiple time zones.", icon: <CheckCircle size={28} className="text-yellowBrand" /> },
  { title: "Instant scalability", description: "Deploy more AI agents instantly during high-demand periods.", icon: <Clock size={28} className="text-yellowBrand" /> },
  { title: "Consistent quality", description: "Every call matches brand standards, behavior, and tone.", icon: <DollarSign size={28} className="text-yellowBrand" /> },
];

const costSavings = [
  { title: "No equipment", icon: <Laptop size={28} className="text-yellowBrand" /> },
  { title: "No headset / telephony gear", icon: <Headphones size={28} className="text-yellowBrand" /> },
  { title: "No retraining", icon: <User size={28} className="text-yellowBrand" /> },
  { title: "No overtime / absenteeism", icon: <ClockIcon size={28} className="text-yellowBrand" /> },
];

const AdvantagesSection: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const isDark = theme === "dark";

  return (
    <section
      id="advantages"
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
              04 / Operational leverage
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="m-0 max-w-xl text-left text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl"
            >
              More capacity. Less drag.
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
              Remove the friction between demand and delivery. Give every
              conversation a reliable place to go.
            </motion.p>

            <div className={`mt-12 border-l pl-5 font-mono text-[10px] uppercase tracking-[0.2em] ${
              isDark ? "border-white/20 text-white/40" : "border-lightText/20 text-lightText/45"
            }`}>
              <p className="m-0">Efficiency index / 04.06</p>
              <p className="m-0 mt-2 text-yellowBrand">Mode: always on</p>
            </div>
          </div>

          <div className="border-t border-current/15">
            {advantages.map((adv, index) => (
              <motion.article
                key={adv.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                whileHover="hover"
                className={`group grid gap-5 border-b border-current/15 py-7 md:grid-cols-[4rem_minmax(0,1fr)_auto] md:items-start md:gap-8 md:py-8 ${
                  isDark ? "hover:bg-white/[0.025]" : "hover:bg-black/[0.025]"
                }`}
              >
                <span className={`font-mono text-xs tracking-[0.2em] ${
                  isDark ? "text-white/35" : "text-lightText/40"
                }`}>0{index + 1}</span>

                <div>
                  <h3 className="m-0 max-w-lg text-2xl font-medium leading-tight tracking-[-0.035em] md:text-3xl">
                    {adv.title}
                  </h3>
                  <p className={`mt-4 max-w-xl text-sm leading-relaxed md:text-base ${
                    isDark ? "text-white/55" : "text-lightText/65"
                  }`}>
                    {adv.description}
                  </p>
                </div>

                <motion.div
                  variants={{ hover: { rotate: 10, scale: 1.08 } }}
                  transition={{ duration: 0.25 }}
                  className="hidden md:block"
                >
                  {adv.icon}
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-end justify-between gap-6 pb-5 mb-8 text-left border-b border-current/15"
          >
            <span className="text-2xl font-medium tracking-[-0.04em] md:text-4xl">
              The overhead we remove.
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-yellowBrand md:block">
              Cost savings / 04.06
            </span>
          </motion.h3>

          <div className="grid gap-px overflow-hidden border border-current/15 sm:grid-cols-2 md:grid-cols-4">
            {costSavings.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ backgroundColor: isDark ? "rgba(215,255,72,.08)" : "rgba(120,144,0,.08)" }}
                className="flex flex-col justify-between p-5 border-r min-h-32 border-current/15 last:border-r-0 md:p-6"
              >
                <div>{item.icon}</div>
                <p className="m-0 max-w-[10rem] font-mono text-xs uppercase leading-relaxed tracking-[0.08em]">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
