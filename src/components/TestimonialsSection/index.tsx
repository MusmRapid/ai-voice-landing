import React from "react";

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
  return (
    <section className="relative py-24 text-white" id="testimonials">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="mb-6 text-3xl font-bold text-center md:text-5xl">
          What <span className="text-yellowBrand">Global BPO Leaders</span> Say
        </h2>
        <p className="max-w-3xl mx-auto mb-16 text-center text-gray-300 md:text-lg">
          Our AI Voice Agents are transforming operations around the globe.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 transition-transform duration-300 shadow-lg bg-white/5 backdrop-blur-md rounded-2xl hover:scale-105"
            >
              {/* Quote */}
              <p className="mb-6 text-lg italic text-gray-200 md:text-xl">
                “{t.quote}”
              </p>

              {/* Name & Location */}
              <div>
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {t.name}
                </h3>
                <p className="text-gray-400">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

/*
import React from "react";

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
  return (
    <section className="relative py-24 text-white" id="testimonials">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold text-center md:text-5xl">
          What <span className="text-yellowBrand">Global BPO Leaders</span> Say
        </h2>
        <p className="max-w-3xl mx-auto mb-16 text-center text-gray-300 md:text-lg">
          Our AI Voice Agents are transforming operations around the globe.
        </p>

        <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col justify-between">
              <p className="mb-6 text-2xl italic leading-relaxed text-gray-100 md:text-3xl">
                “{t.quote}”
              </p>

              <div>
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {t.name}
                </h3>
                <p className="text-gray-400">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

*/