"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "MUHAMMAD SALEH",
    position: "Managing Director at Emrill",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "When my office printer broke down, I contacted Raha Copier for repair services. They promptly dispatched a technician who efficiently fixed the issue, getting us back up and running in no time. Their expertise and dedication are truly impressive!",
  },
  {
    name: "NATHAN ROBERTS",
    position: "Staff at Emaratech",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "I recently rented a high-quality printer from them, and it was a game-changer for my event. The process was seamless, and their staff provided excellent guidance in selecting the right model. The equipment performed flawlessly, exceeding my expectations.",
  },
  {
    name: "LIU XIN",
    position: "IT Team at Saitech",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    text: "The team at Raha Copier is simply fantastic. I recently leased a printer from them, and they went above and beyond to ensure I had the right equipment for my office. Their knowledgeable staff provided excellent guidance throughout the leasing process. A top-notch experience!",
  },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 7000); // Auto-slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 px-6 text-center">
      <h2 className="text-black text-3xl font-bold">
        CUSTOMER REVIEW
      </h2>
      <div className="w-20 h-1 bg-darkpink mx-auto my-4"></div>

      {/* Reviews Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 shadow-lg rounded-lg text-center"
          >
            <p className="text-gray-700 text-lg italic">{review.text}</p>
            <div className="mt-6 flex flex-col items-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-lg font-bold mt-2">{review.name}</h3>
              <p className="text-sm italic text-gray-500">{review.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
