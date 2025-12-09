import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}

          whileTap={{ scale: 0.9 }}

          className="fixed z-50 p-3 text-black transition-all duration-300 rounded-full shadow-lg bottom-6 right-6 backdrop-blur-xl bg-yellowBrand hover:bg-yellowBrand/80"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUp size={22} />
          </motion.div>
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;
