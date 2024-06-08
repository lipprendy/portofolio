'use client';
// import { PROJECTS } from '@/app/constants';
import React from 'react';
import project1 from '@/public/assets/about-rev.jpg';
import project2 from '@/public/assets/home2.jpg';
import project3 from '@/public/assets/projects/project-3.jpg';
import project4 from '@/public/assets/projects/project-4.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionImage = motion(Image);

const index = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 py-16">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-2 text-center text-4xl"
      >
        Projects
      </motion.div>
      <motion.div
      // whileInView={{ opacity: 1, x: 0 }}
      // initial={{ opacity: 0, x: -100 }}
      // transition={{ duration: 1.5 }}
      >
        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center mt-16">
            <div className="w-full lg:w-1/4">
              <a href="https://web-buy-car.netlify.app/" target="_blank">
                <MotionImage
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.5 }}
                  src={project1}
                  width={200}
                  height={200}
                  alt="project1"
                />
              </a>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="font-bold">Landing Page Car </h6>
              <p className="text-gray-900">
                `A modern and interactive car dealership landing page featuring
                a sleek design, comprehensive car listings, detailed car
                profiles, and seamless user experience. The landing page
                includes an advanced search functionality to filter cars by
                make, model, price, and other specifications.`
              </p>
              <div className="space-x-4 mt-7">
                <span className="rounded px-2 py-1 bg-gray-700 text-sm font-medium text-white">
                  HTML
                </span>
                <span className="rounded px-2 py-1 bg-gray-700 text-sm font-medium text-white">
                  CSS
                </span>
                <span className="rounded px-2 py-1 bg-gray-700 text-sm font-medium text-white">
                  JAVASCRIPT
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center mt-16">
            <div className="w-full lg:w-1/4">
              <a href="https://web-travel-responsive.netlify.app/" target='_blank'>
                <MotionImage
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1.5 }}
                  src={project2}
                  width={200}
                  height={100}
                  alt="project1"
                />
              </a>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="font-bold">Landing Page Travel</h6>
              <p className="text-gray-900">
                `A captivating and fully functional travel landing page designed
                to inspire and facilitate travel planning. This landing page
                features stunning visuals, comprehensive destination guides`
              </p>
              <div className="space-x-4 mt-7">
                <span className="rounded px-2 py-1 bg-gray-700 text-sm font-medium text-white">
                  HTML
                </span>
                <span className="rounded px-2 py-1 bg-gray-700 text-sm font-medium text-white">
                  CSS
                </span>
                <span className="rounded px-2 py-1 bg-gray-700 text-sm font-medium text-white">
                  JAVASCRIPT
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default index;
