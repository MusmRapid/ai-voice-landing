
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, Infinity as InfinityIcon, Network } from "lucide-react";
import { useAtom } from "jotai/react";
import { themeAtom } from "../atom/themeAtom";
import PartnerInquiryModal from "../components/Modal/PartnerInquiryModal";

const steps = [
  ["01", "You introduce", "Bring a client, account, or workflow that needs a stronger voice operation."],
  ["02", "We deploy", "Our team handles the product, implementation, and operational heavy lifting."],
  ["03", "You participate", "Earn a share from every bot sold through your partner channel."],
];

const BecomePartner: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const [openModal, setOpenModal] = useState(false);
  const isDark = theme === "dark";

  return (
    <>
      <main className={`min-h-screen px-6 pb-24 pt-32 md:px-12 md:pb-36 md:pt-44 ${isDark ? "text-white" : "text-lightText"}`}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-end lg:gap-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className={`mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] ${isDark ? "text-white/45" : "text-lightText/50"}`}>
                <span className="w-8 h-px bg-yellowBrand" />
                Partner program / 01
              </div>
              <h1 className="m-0 max-w-5xl text-6xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-8xl lg:text-[7.25rem]">
                <span className="">Your network.</span><br/>
                <span className="text-yellowBrand">Our AI.</span><br/>
                <span className="text-yellowBrand">More calls, automated.</span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.12 }} className={`relative overflow-hidden border p-7 md:p-9 ${isDark ? "border-white/15 bg-white/[0.045]" : "border-lightText/15 bg-black/[0.035]"}`}>
              <div className="absolute right-0 top-0 h-12 w-12 bg-yellowBrand [clip-path:polygon(0_0,100%_0,100%_100%)]" />
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-yellowBrand">
                  <span className="h-2 w-2 rounded-full bg-yellowBrand shadow-[0_0_14px_#d7ff48]" />
                  Partner channel / live
                </div>
                <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${isDark ? "text-white/35" : "text-lightText/40"}`}>01—03</span>
              </div>
              <div className="relative flex items-end justify-between mb-8 border-b border-current/15 pb-7">
                <div>
                  <p className={`m-0 font-mono text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/40" : "text-lightText/45"}`}>Partner economics</p>
                  <motion.p
                    animate={{ opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="m-0 mt-2 text-6xl font-semibold leading-none tracking-[-0.08em] text-yellowBrand md:text-7xl"
                  >
                    PER BOT
                  </motion.p>
                </div>
                <div className="mb-1 text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-yellowBrand">
                  <p className="m-0">Revenue share</p>
                  <p className="m-0 opacity-60">Tracked / attributed</p>
                </div>
              </div>
              <p className={`m-0 text-2xl font-medium leading-tight tracking-[-0.04em] md:text-3xl ${isDark ? "text-white" : "text-lightText"}`}>
                Bring Homologue to the call centers and businesses you already serve
              </p>
              <div className={`mt-10 grid grid-cols-3 gap-px border-y ${isDark ? "border-white/15 bg-white/15" : "border-lightText/15 bg-lightText/15"}`}>
                {["INTRODUCE", "DEPLOY", "PARTICIPATE"].map((label, index) => (
                  <div key={label} className={`${isDark ? "bg-[#0b0d0a]" : "bg-[#f7f8f3]"} px-3 py-4`}>
                    <p className="m-0 font-mono text-xs text-yellowBrand">0{index + 1}</p>
                    <p className={`m-0 mt-2 font-mono text-[9px] uppercase tracking-[0.14em] ${isDark ? "text-white/45" : "text-lightText/50"}`}>{label}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setOpenModal(true)} className="mt-8 inline-flex items-center gap-4 rounded-xl bg-yellowBrand px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-yellow-300">
                Apply to partner <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`mt-24 grid gap-px border-y ${isDark ? "border-white/15 bg-white/15" : "border-lightText/15 bg-lightText/15"} md:grid-cols-3`}>
            {[
              ["PER BOT", "Earn on every sale"],
              ["0 FEES", "No setup or platform cost"],
              ["∞ UPSIDE", "No ceiling on referrals"],
            ].map(([metric, label]) => (
              <div key={metric} className={`p-6 md:p-8 ${isDark ? "bg-[#050505]" : "bg-[#f7f8f3]"}`}>
                <p className="m-0 font-mono text-2xl tracking-[-0.04em] text-yellowBrand md:text-3xl">{metric}</p>
                <p className={`m-0 mt-3 font-mono text-[10px] uppercase tracking-[0.16em] ${isDark ? "text-white/45" : "text-lightText/50"}`}>{label}</p>
              </div>
            ))}
          </motion.div>

          <div className="mt-32 grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className={`mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] ${isDark ? "text-white/45" : "text-lightText/50"}`}>
                <span className="w-8 h-px bg-yellowBrand" />
                How it works / 02
              </p>
              <h2 className="m-0 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-6xl">Simple enough to start. Serious enough to scale.</h2>
            </div>
            <div className={`border-t ${isDark ? "border-white/15" : "border-lightText/15"}`}>
              {steps.map(([number, title, description]) => (
                <div key={number} className={`grid gap-5 border-b py-7 md:grid-cols-[4rem_12rem_1fr] md:items-start md:gap-8 ${isDark ? "border-white/15" : "border-lightText/15"}`}>
                  <span className="font-mono text-xs tracking-[0.2em] text-yellowBrand">{number}</span>
                  <h3 className="m-0 text-2xl font-medium tracking-[-0.035em]">{title}</h3>
                  <p className={`m-0 text-sm leading-relaxed md:text-base ${isDark ? "text-white/55" : "text-lightText/65"}`}>{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative mt-32 overflow-hidden border p-8 md:p-12 ${isDark ? "border-white/15 bg-white/[0.04]" : "border-lightText/15 bg-black/[0.035]"}`}>
            <div className="absolute right-0 top-0 h-14 w-14 bg-yellowBrand [clip-path:polygon(0_0,100%_0,100%_100%)]" />
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="flex items-center gap-3 mb-7 text-yellowBrand"><Network size={20} /><span className="font-mono text-[10px] uppercase tracking-[0.2em]">Built for connected operators</span></div>
                <h2 className="m-0 max-w-3xl text-4xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-6xl">Your reach is valuable. Make it compound.</h2>
                <div className={`mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.15em] ${isDark ? "text-white/45" : "text-lightText/50"}`}>
                  <span className="flex items-center gap-2"><Check size={14} className="text-yellowBrand" /> Transparent attribution</span>
                  <span className="flex items-center gap-2"><Check size={14} className="text-yellowBrand" /> Enablement included</span>
                  <span className="flex items-center gap-2"><InfinityIcon size={14} className="text-yellowBrand" /> Scalable upside</span>
                </div>
              </div>
              <button onClick={() => setOpenModal(true)} className="inline-flex items-center justify-center gap-4 rounded-xl border border-yellowBrand px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.14em] text-yellowBrand transition-colors hover:bg-yellowBrand hover:text-black">
                Start a conversation <ArrowDownRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <PartnerInquiryModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default BecomePartner;