import { motion } from 'framer-motion';
import React from 'react';

const PageLoader = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-5'>
      <motion.h1
        initial={{ translateY: -1500 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className='text-9xl uppercase font-thin text-lf-aqua tracking-wider max-sm:text-7xl'>
        <span className='font-semibold'>Lite</span>flix
      </motion.h1>
      <motion.p
        initial={{ translateX: -1500 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className='text-white text-2xl tracking-widest animate-pulse max-sm:text-xl'>
        The application is loading...
      </motion.p>
    </div>
  );
};

export default PageLoader;
