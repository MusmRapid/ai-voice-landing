
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Network, Sparkles, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

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
            <h2 className="m-0 max-w-xl text-left text-5xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-7xl">
              Turn your network into an advantage.
            </h2>
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
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center justify-center border h-11 w-11 border-yellowBrand/40 text-yellowBrand">
                <UsersRound size={20} strokeWidth={1.5} />
              </div>
              <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                isDark ? "text-white/35" : "text-lightText/40"
              }`}>Partner / 01</span>
            </div>
            <p className={`m-0 max-w-xl text-2xl font-medium leading-tight tracking-[-0.035em] md:text-3xl ${
              isDark ? "text-white" : "text-lightText"
            }`}>
              Bring your clients, expertise, or distribution network into an
              infrastructure built for serious scale.
            </p>
            <p className={`mt-5 max-w-lg text-sm leading-relaxed ${
              isDark ? "text-white/60" : "text-lightText/65"
            }`}>
              Together, we make deployment simpler, reach wider, and create a
              more capable voice operation for every market you serve.
            </p>

            <div className="flex flex-col items-start gap-5 mt-10 sm:flex-row sm:items-center">
              <Link
                to="/partnerprogram"
                className="inline-flex items-center justify-center gap-4 rounded-xl bg-yellowBrand px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-yellow-300"
              >
                Become a partner <ArrowUpRight size={18} />
              </Link>
              <div className={`flex items-center gap-3 px-2 font-mono text-[10px] uppercase tracking-[0.16em] ${
                isDark ? "text-white/40" : "text-lightText/45"
              }`}>
                <Network size={16} className="text-yellowBrand" />
                Built for shared momentum
              </div>
            </div>
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