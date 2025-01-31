"use client";

import Image from "next/image";
import eitcLogo from "../assets/eitcLogo.png";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const textVariants = {
  initial: { y: -20 },
  animate: { y: 0, transition: { duration: 1.5 } },
};

const starVariants = {
  animate: {
    scale: [1, 1.2, 1],
    filter: [
      "drop-shadow(0 0 2px rgba(0, 255, 255, 0.5))",
      "drop-shadow(0 0 3px rgba(0, 255, 255, 1))",
      "drop-shadow(0 0 2px rgba(0, 255, 255, 0.5))",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const container1 = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const container2 = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            <motion.h1
              initial="hidden"
              id="eitc"
              animate="visible"
              className="my-20 lg:pr-1/4 text-7xl lg:text-9xl"
            >
              EITC
            </motion.h1>
            <motion.span
              initial="hidden"
              id="eitcn"
              animate="visible"
              className="my-1 lg:pr-1/4 text-2xl lg:text-3xl"
            >
              ENSIAS IT CLUB
            </motion.span>
            <motion.div
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              <div className="flex items-center">
                <motion.h3
                  initial="initial"
                  animate="animate"
                  id="eitcn"
                  className="center font-bold text-md md:text-xl md:font-large"
                >
                  Where IT minds get creative
                </motion.h3>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-1/2 mt-8 mx-auto lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.div
              variants={container2(1.2)}
              className="neon-image"
              initial="hidden"
              animate="visible"
            >
              <Image src={eitcLogo} alt="EITC Logo" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
