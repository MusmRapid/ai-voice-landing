import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useAtom } from "jotai/react";
import { themeAtom } from "../../atom/themeAtom";

const testimonials = [
  {
    name: "Director of Operations",
    location: "Manila",
    quote:
      "Our Philippines team saw a 2x increase in call throughput in the first week. The AI sounds shockingly human.",
  },
  {
    name: "CX Head",
    location: "Bangalore",
    quote:
      "In India, AI helped us eliminate scheduling complexity and focus human talent on higher-value conversations.",
  },
  {
    name: "COO",
    location: "Colombo",
    quote:
      "We maintained 24/7 operations in Sri Lanka for the first time without expanding our physical center.",
  },
  {
    name: "Owner",
    location: "Lahore",
    quote:
      "Looking forward to the Pakistan launch — our teams here are ready for this next-generation tool.",
  },
];
const carouselItems = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]];

const TestimonialsSection: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const [activeIndex, setActiveIndex] = useState(1);
  const [instantReset, setInstantReset] = useState(false);
  const isDark = theme === "dark";
  const visibleIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => index + 1);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex === carouselItems.length - 1) {
      const timeout = window.setTimeout(() => {
        setInstantReset(true);
        setActiveIndex(1);
      }, 650);

      return () => window.clearTimeout(timeout);
    }

    if (instantReset) {
      const timeout = window.setTimeout(() => setInstantReset(false), 40);
      return () => window.clearTimeout(timeout);
    }
  }, [activeIndex, instantReset]);

  return (
    <section
      id="testimonials"
      className={`relative overflow-hidden transition-colors duration-500 ${
        isDark ? "text-white" : "text-lightText"
      }`}
    >
      <div className="px-6 mx-auto max-w-7xl md:px-12">
        <div className="flex items-end justify-between gap-8 pb-5 border-b mb-14 border-current/15">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className={`mb-6 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.24em] ${
                isDark ? "text-white/45" : "text-lightText/50"
              }`}
            >
              <span className="w-8 h-px bg-yellowBrand" />
              05 / Field notes
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75 }}
              className="m-0 max-w-3xl text-left text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl"
            >
              What changes when the system works.
            </motion.h2>
          </div>

        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={instantReset ? { duration: 0 } : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {carouselItems.map((testimonial, index) => (
              <article key={`${testimonial.location}-${index}`} className="w-full shrink-0">
                <div className="grid min-h-[24rem] gap-12 border-b border-current/15 pb-10 md:grid-cols-[5rem_minmax(0,1fr)_14rem] md:gap-10">
                  <Quote className="w-10 h-10 text-yellowBrand" strokeWidth={1.2} />

                  <blockquote className="m-0 max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                    “{testimonial.quote}”
                  </blockquote>

                  <div className="self-end pl-5 border-l border-current/15">
                    <p className="m-0 text-sm font-semibold">{testimonial.name}</p>
                    <p className={`mt-2 font-mono text-[10px] uppercase tracking-[0.18em] ${
                      isDark ? "text-white/45" : "text-lightText/50"
                    }`}>
                      {testimonial.location} / verified operator
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center justify-between mt-7">
          <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
            isDark ? "text-white/40" : "text-lightText/45"
          }`}>
            Signal archive / 05.06
          </span>
          <span className="font-mono text-xs tracking-[0.2em] text-yellowBrand">
            0{visibleIndex + 1} / 0{testimonials.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
