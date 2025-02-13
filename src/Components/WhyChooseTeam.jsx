"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Our Workers",
    description:
      "All Engineers and workers are professional & well-trained experts in this category of work. We provide amazing customer service and very quick repair.",
  },
  {
    title: "Our Commitment",
    description:
      "We are committed to providing top-quality service with fast response times. Customer satisfaction is our top priority.",
  },
  {
    title: "Our Expertise",
    description:
      "With years of experience, we ensure that every service is performed with precision and professionalism.",
  },
];

export default function WhyChooseTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-300 pt-16 pb-6 px-6 text-center">
      <h2 className="text-black text-3xl font-bold">
        Why Choose Our Team
      </h2>
      <div className="w-20 h-1 bg-darkpink mx-auto my-4"></div>

      {/* Animated Slide Content */}
      <div className="relative max-w-2xl mx-auto mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold pt-6 text-dpink">{slides[currentIndex].title}</h3>
            <p className="txt-bold text-center mt-4">
              {slides[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-12 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-darkpink" : "border border-dpink"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
