import React from "react";
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

const TestimonialsSection: React.FC = () => {
  const [theme] = useAtom(themeAtom);

  return (
    <section
      id="testimonials"
      className={`transition-colors duration-500 relative py-24 ${
        theme === "dark" ? "text-white" : "text-lightText"
      }`}
    >
      <div className="px-6 mx-auto max-w-7xl">
        <h2
          className={`mb-6 text-3xl font-bold text-center md:text-5xl transition-colors duration-500 ${
            theme === "dark" ? "text-white" : "text-lightText"
          }`}
        >
          What <span className="text-yellowBrand">Global BPO Leaders</span> Say
        </h2>
        <p
          className={`max-w-3xl mx-auto mb-16 text-center md:text-lg transition-colors duration-500 ${
            theme === "dark" ? "text-gray-300" : "text-lightText/80"
          }`}
        >
          Our AI Voice Agents are transforming operations around the globe.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-8 transition-all duration-500 shadow-lg rounded-2xl backdrop-blur-md ${
                theme === "dark"
                  ? "bg-white/5 hover:bg-white/10"
                  : "bg-lightBg/30 hover:bg-lightSecondary/20"
              } hover:scale-105`}
            >
              <p
                className={`mb-6 text-lg italic md:text-xl transition-colors duration-500 ${
                  theme === "dark" ? "text-gray-200" : "text-lightText/80"
                }`}
              >
                “{t.quote}”
              </p>

              <div>
                <h3
                  className={`text-lg font-semibold md:text-xl transition-colors duration-500 ${
                    theme === "dark" ? "text-white" : "text-lightText"
                  }`}
                >
                  {t.name}
                </h3>
                <p
                  className={`transition-colors duration-500 ${
                    theme === "dark" ? "text-gray-400" : "text-lightText/60"
                  }`}
                >
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
