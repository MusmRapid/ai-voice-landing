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

  return (
    <section
      id="regions"
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
          Global <span className="text-yellowBrand">Coverage</span>
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
          Powering high-performance voice operations across the world’s leading
          call center regions.
        </motion.p>

        <div className="grid gap-10 mt-16 sm:grid-cols-2 md:grid-cols-3">
          {regions.map((region, index) => (
            <motion.div
              key={region.code}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`p-8 rounded-2xl border backdrop-blur-md shadow-lg transition ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-yellowBrand/50"
                  : "bg-lightBg/30 border-lightText/10 hover:bg-lightSecondary/20 hover:border-yellowBrand/50"
              } ${region.comingSoon ? "opacity-70" : ""}`}
            >
              <div className="flex justify-center mb-6">
                <Flag code={region.code} style={{ width: 60, height: 45 }} />
              </div>

              <h3
                className={`text-xl font-semibold text-center transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-lightText"
                }`}
              >
                {region.country}
              </h3>

              {region.comingSoon && (
                <p className="mt-2 font-medium tracking-wide text-center text-yellowBrand">
                  Coming Soon
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
