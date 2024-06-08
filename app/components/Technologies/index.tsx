'use client';

import React from 'react';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaSass } from 'react-icons/fa6';
import { motion, Variants } from 'framer-motion';

const iconVariants = (duration: number) : Variants => ({
  initial: {y: -7},
  animate: {
    y: [7, -7],
    transition : {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    }
  }
})

const index = () => {
  return (
    <div className="border-b border-neutral-800 pb-10">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity:0, y: -100}}
      transition={{duration: 1.5}}
      className="text-center text-4xl my-20">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity:0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center md:gap-20 gap-8">
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-3"
        >
          <RiReactjsLine className="text-5xl text-[#38BDF8]" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-3"
        >
          <TbBrandNextjs className="text-5xl text-[#000000]" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-3"
        >
          <RiTailwindCssFill className="text-5xl text-[#61DAFB]" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-3"
        >
          <FaSass className="text-5xl text-[#CC6699]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default index;
