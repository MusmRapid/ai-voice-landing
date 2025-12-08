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

  return (
    <section
      id="advantages"
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
          Operational <span className="text-yellowBrand">Advantages & Cost Savings</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className={`max-w-3xl mx-auto mt-6 text-center md:text-lg transition-colors duration-500 ${
            theme === "dark" ? "text-gray-300" : "text-lightText/80"
          }`}
        >
          AI Voice Agents reduce costs, boost efficiency, and ensure consistent quality across your global operations.
        </motion.p>

        <div className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`p-8 transition border shadow-lg rounded-2xl backdrop-blur-md ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:border-yellowBrand/50 hover:bg-white/10"
                  : "bg-lightBg/30 border-lightText/10 hover:bg-lightSecondary/20 hover:border-yellowBrand/50"
              }`}
            >
              <div className="flex justify-center mb-4">{adv.icon}</div>
              <h3 className={`text-xl font-semibold text-center transition-colors duration-500 ${theme === "dark" ? "text-white" : "text-lightText"}`}>{adv.title}</h3>
              <p className={`mt-2 text-center transition-colors duration-500 ${theme === "dark" ? "text-gray-300" : "text-lightText/80"}`}>{adv.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-12 text-2xl font-bold text-center md:text-3xl transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-lightText"
            }`}
          >
            Significant <span className="text-yellowBrand">Cost Savings</span>
          </motion.h3>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {costSavings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 120 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className={`flex flex-col items-center justify-center p-6 transition border shadow-lg rounded-2xl backdrop-blur-md ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-yellowBrand/50 hover:bg-white/10"
                    : "bg-lightBg/30 border-lightText/10 hover:bg-lightSecondary/20 hover:border-yellowBrand/50"
                }`}
              >
                <div className="mb-3">{item.icon}</div>
                <p className={`font-medium text-center transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-lightText"
                }`}>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
