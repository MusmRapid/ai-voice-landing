import React from "react";
import { motion } from "framer-motion";
import Flag from 'react-world-flags';

<Flag code="PH" style={{ width: 60, height: 45 }} />


const regions = [
  {
    country: "Philippines",
    code: "PH",
  },
  {
    country: "India",
    code: "IN",
  },
  {
    country: "Sri Lanka",
    code: "LK",
  },
  {
    country: "South Africa",
    code: "ZA",
  },
  {
    country: "Latin America",
    code: "CO", // You can change to MX if you want
  },
  {
    country: "Pakistan",
    code: "PK",
    comingSoon: true,
  },
];

const RegionsSection: React.FC = () => {
  return (
    <section className="relative py-24 text-white" id="regions">
      <div className="px-6 mx-auto max-w-7xl">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center md:text-5xl"
        >
          Global <span className="text-yellowBrand">Coverage</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-6 text-center text-gray-300 md:text-lg"
        >
          Powering high-performance voice operations across the world’s leading
          call center regions.
        </motion.p>

        {/* Regions Grid */}
        <div className="grid gap-10 mt-16 sm:grid-cols-2 md:grid-cols-3">
          {regions.map((region, index) => (
            <motion.div
              key={region.code}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg 
              hover:border-yellowBrand/50 hover:bg-white/10 transition ${
                region.comingSoon ? "opacity-70" : ""
              }`}
            >
              {/* SVG Flag */}
              <div className="flex justify-center mb-6">
                <Flag  code={region.code} style={{ width: 60, height: 45 }} />
              </div>

              {/* Country Name */}
              <h3 className="text-xl font-semibold text-center">
                {region.country}
              </h3>

              {/* Coming Soon Label */}
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
