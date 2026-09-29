
import React from "react";
import { motion } from "framer-motion";
import { Network, Sparkles } from "lucide-react";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";
import PartnerForm from "../PartnerForm";

const PartnerSection: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const isDark = theme === "dark";

  return (
    <section
      id="partners"
      className={`relative overflow-hidden border-t transition-colors duration-500 ${
        isDark ? "border-white/10 text-white" : "border-lightText/15 text-lightText"
      }`}
    >
      <div className="px-6 py-24 mx-auto max-w-7xl md:px-12 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <div className={`mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] ${
              isDark ? "text-white/45" : "text-lightText/50"
            }`}>
              <span className="w-8 h-px bg-yellowBrand" />
              06 / Partner protocol
            </div>
            <h2 className="m-0 max-w-xl text-left text-4xl font-semibold leading-[0.96] tracking-[-0.05em] md:text-6xl">
              Turn your network into an advantage.
            </h2>
            <p className={`mt-7 max-w-lg text-base leading-relaxed md:text-lg ${
              isDark ? "text-white/60" : "text-lightText/65"
            }`}>
              Bring your clients, expertise, or distribution network into an
              infrastructure built for serious scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`relative overflow-hidden border p-8 md:p-10 ${
              isDark
                ? "border-white/15 bg-white/[0.045]"
                : "border-lightText/15 bg-black/[0.035]"
            }`}
          >
            <div className="absolute right-0 top-0 h-10 w-10 bg-yellowBrand [clip-path:polygon(0_0,100%_0,100%_100%)]" />
            <div className="flex items-center justify-between pb-5 mb-8 border-b border-current/15">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-yellowBrand">
                <Network size={16} /> Partner network / intake
              </div>
              <span className={`font-mono text-[9px] uppercase tracking-[0.14em] ${isDark ? "text-white/35" : "text-lightText/40"}`}>
                01—06
              </span>
            </div>
            <PartnerForm />
          </motion.div>
        </div>

        <div className={`mt-20 grid gap-px border-y ${
          isDark ? "border-white/15 bg-white/15" : "border-lightText/15 bg-lightText/15"
        } sm:grid-cols-3`}>
          {[
            ["01", "Extend your offering"],
            ["02", "Open new markets"],
            ["03", "Scale with confidence"],
          ].map(([number, label]) => (
            <div key={number} className={`group flex items-center gap-4 px-5 py-5 transition-colors ${
              isDark ? "bg-[#050505]" : "bg-[#f7f8f3]"
            } hover:bg-yellowBrand hover:text-black`}>
              <span className="font-mono text-xs tracking-[0.18em] text-yellowBrand">{number}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-60">{label}</span>
              <Sparkles size={14} className="ml-auto transition-transform opacity-50 group-hover:rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection