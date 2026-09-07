import React from "react";
import { motion } from "framer-motion";
import Flag from "react-world-flags";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

const regions = [
  { country: "Philippines", code: "PH" },
  { country: "India", code: "IN" },
  { country: "Sri Lanka", code: "LK" },
  { country: "South Africa", code: "ZA" },
  { country: "Latin America", code: "CO" },
  { country: "Pakistan", code: "PK", comingSoon: true },
];

const RegionsSection: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const isDark = theme === "dark";

  return (
    <section
      id="regions"
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
              03 / Global network
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="m-0 max-w-xl text-left text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl"
            >
              One voice layer. Every time zone.
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
              Local fluency, global consistency. Humalogue operates where your
              customers are, without asking your team to follow the sun.
            </motion.p>

            <div className={`mt-12 border-l pl-5 font-mono text-[10px] uppercase tracking-[0.2em] ${
              isDark ? "border-white/20 text-white/40" : "border-lightText/20 text-lightText/45"
            }`}>
              <p className="m-0">Coverage map / 03.06</p>
              <p className="m-0 mt-2 text-yellowBrand">Signal: connected</p>
            </div>
          </div>

          <div className="border-t border-current/15">
            {regions.map((region, index) => {
              const ResolvedFlag: any = (Flag as any)?.default ?? Flag;

              return (
                <motion.div
                  key={region.code}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className={`group grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-5 border-b border-current/15 py-7 transition-colors md:grid-cols-[4rem_minmax(0,1fr)_8rem] md:gap-8 md:py-8 ${
                    isDark ? "hover:bg-white/[0.025]" : "hover:bg-black/[0.025]"
                  } ${region.comingSoon ? "opacity-55" : ""}`}
                >
                  <span className={`font-mono text-xs tracking-[0.2em] ${
                    isDark ? "text-white/35" : "text-lightText/40"
                  }`}>0{index + 1}</span>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-12 h-8 overflow-hidden transition duration-300 grayscale group-hover:grayscale-0">
                      <ResolvedFlag code={region.code} style={{ width: 42, height: 28, objectFit: "cover" }} />
                    </span>
                    <h3 className="m-0 text-xl font-medium tracking-[-0.03em] md:text-2xl">
                      {region.country}
                    </h3>
                  </div>

                  <span className={`text-right font-mono text-[10px] uppercase tracking-[0.16em] ${
                    region.comingSoon ? "text-yellowBrand" : isDark ? "text-white/35" : "text-lightText/40"
                  }`}>
                    {region.comingSoon ? "Live node" : "Live node"}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
