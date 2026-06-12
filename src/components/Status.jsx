// import React from "react";
// import { FiUsers, FiMapPin, FiAward, FiCheckCircle } from "react-icons/fi";

// const Status = () => {
//   const statsData = [
//     {
//       icon: <FiMapPin className="w-6 h-6 text-[#1e6b7b]" />,
//       value: "50+",
//       label: "Verified Study Nooks",
//       description: "Across major university campuses.",
//     },
//     {
//       icon: <FiUsers className="w-6 h-6 text-[#1e6b7b]" />,
//       value: "10k+",
//       label: "Ambitious Students",
//       description: "Active community members.",
//     },
//     {
//       icon: <FiCheckCircle className="w-6 h-6 text-[#1e6b7b]" />,
//       value: "99.2%",
//       label: "Satisfaction Rate",
//       description: "Based on recent student reviews.",
//     },
//     {
//       icon: <FiAward className="w-6 h-6 text-[#1e6b7b]" />,
//       value: "150k+",
//       label: "Hours Studied",
//       description: "Productive hours spent by users.",
//     },
//   ];

//   return (
//     <section className="bg-[#f4f8fa] py-16 px-6 md:px-12 font-sans text-center">
//       <div className="max-w-6xl mx-auto">
//         <div className="mb-12">
//           <span className="text-xs font-bold tracking-widest text-[#1e6b7b] uppercase">
//             Our Growth
//           </span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a202c] mt-2">
//             StudyNook by the numbers.
//           </h2>
//           <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
//             Empowering students with the perfect space to focus, collaborate,
//             and achieve their academic goals.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
//           {statsData.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl p-6 shadow-sm flex flex-col items-start transition-all duration-300 hover:shadow-md"
//             >
//               <div className="w-12 h-12 bg-[#e6f2f5] rounded-full flex items-center justify-center mb-4">
//                 {stat.icon}
//               </div>

//               <h3 className="text-3xl font-extrabold text-[#1a202c] mb-1">
//                 {stat.value}
//               </h3>

//               <h4 className="text-sm font-bold text-gray-800 mb-1">
//                 {stat.label}
//               </h4>

//               <p className="text-xs text-gray-500 leading-relaxed">
//                 {stat.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Status;

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiMapPin,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

const Status = () => {
  const statsData = [
    {
      icon: <FiMapPin className="w-6 h-6 text-cyan-700" />,
      value: "50+",
      label: "Verified Study Nooks",
      description: "Across major university campuses.",
    },
    {
      icon: <FiUsers className="w-6 h-6 text-cyan-700" />,
      value: "10k+",
      label: "Ambitious Students",
      description: "Active community members.",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 text-cyan-700" />,
      value: "99.2%",
      label: "Satisfaction Rate",
      description: "Based on recent student reviews.",
    },
    {
      icon: <FiAward className="w-6 h-6 text-cyan-700" />,
      value: "150k+",
      label: "Hours Studied",
      description: "Productive hours spent by users.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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
    <section className="bg-[#f4f8fa] py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-cyan-600 font-semibold tracking-[0.2em] uppercase text-sm">
            Our Growth
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">
            StudyNook by the numbers
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Empowering students with distraction-free environments to
            focus, collaborate, and achieve their academic goals.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl border border-transparent hover:border-cyan-100"
            >
              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-5"
              >
                {stat.icon}
              </motion.div>

              {/* Number */}
              <h3 className="text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </h3>

              {/* Label */}
              <h4 className="font-semibold text-slate-800 mb-2">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Status;