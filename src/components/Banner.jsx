
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import banner from "@/assets/image/banner-1.jpg";
import hero from "@/assets/image/banner-2.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-[#eef4f6] overflow-hidden mt-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#111827]">
              Find Your <span className="text-cyan-600">Perfect</span>
              <br />
              Study Room
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg max-w-lg leading-8">
              Browse and book quiet, private study rooms in your library.
              Designed for students who demand focused flow and premium
              environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <Link href="/rooms">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Explore Rooms
                  <FaArrowRight />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Become a Host
              </motion.button>
            </div>
          </motion.div>


          <div className="relative flex justify-center items-center min-h-[500px]">
       
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -z-10 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"
            />

       
            <motion.div
              initial={{ opacity: 0, x: 80, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                rotate: -3,
              }}
              className="relative w-65 md:w-[320px] lg:w-[360px] rotate-[-6deg] shadow-2xl rounded-3xl overflow-hidden bg-white"
            >
              <Image
                src={banner}
                alt="Study Room"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />

              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-5 py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    The Zenith Pod
                  </h3>
                  <p className="text-xs text-gray-500">
                    Quiet Study Room
                  </p>
                </div>

                <span className="font-bold text-cyan-700">
                  $12/hr
                </span>
              </div>
            </motion.div>

  
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.08,
                rotate: -8,
              }}
              className="absolute bottom-8 left-0 md:left-8 w-60 rotate-[-12deg] bg-white shadow-xl rounded-2xl overflow-hidden"
            >
              <Image
                src={hero}
                alt="Study Room"
                width={400}
                height={300}
                className="w-full h-35 object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold text-sm">
                  Quiet Zone
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  98% Focus Score
                </p>
              </div>
            </motion.div>

    
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="absolute right-0 bottom-24 bg-white shadow-xl rounded-2xl px-5 py-4 w-55"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <span className="text-cyan-500 text-lg">✓</span>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-cyan-500">
                    Booking Confirmed
                  </h4>

                  <p className="text-xs text-gray-500 mt-1 leading-5">
                    Your room is ready on Floor 4, Site 403.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;