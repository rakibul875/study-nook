"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiClock, FiLock } from "react-icons/fi";

const WheyStudy = () => {
  const features = [
    {
      icon: <FiShield className="w-6 h-6 text-[#1e6b7b]" />,
      title: "Verified Space",
      description:
        "Every nook is hand-vetted for cleanliness, quietness, and high-speed connectivity.",
    },
    {
      icon: <FiClock className="w-6 h-6 text-[#1e6b7b]" />,
      title: "Instant Booking",
      description:
        "No more hunting for empty tables. Book your spot in seconds with real-time availability.",
    },
    {
      icon: <FiLock className="w-6 h-6 text-[#1e6b7b]" />,
      title: "Keyless Entry",
      description:
        "Unlock your room directly from your phone. Seamless, secure, and touch-free access.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="bg-[#f4f8fa] py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
    
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-cyan-600 font-semibold tracking-wide uppercase">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mt-3">
            Why StudyNook?
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Experience distraction-free learning spaces designed for focus,
            productivity, and comfort.
          </p>
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-transparent hover:border-cyan-100 flex flex-col items-center text-center"
            >
     
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 bg-[#e6f2f5] rounded-full flex items-center justify-center mb-6"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-[#2d3748] mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WheyStudy;