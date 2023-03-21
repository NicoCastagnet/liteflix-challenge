import { motion } from 'framer-motion';
import React from 'react';
import Play from './icons/Play';
import Plus from './icons/Plus';

const MovieInfo = ({ name }) => {
  return (
    <div className='flex flex-col items-left justify-end text-start w-full h-auto my-14 max-sm:text-center max-sm:pt-24'>
      <motion.h2
        initial={{ translateY: -1500 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className='text-white uppercase font-light max-sm:text-xl'>
        Original de <span className='font-semibold'>liteflix</span>
      </motion.h2>
      <motion.h1
        initial={{ translateX: -1500 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className='text-lf-aqua font-bold text-7xl uppercase max-sm:text-3xl max-sm:w-full'>
        {name}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className='flex gap-5 mt-8 w-full max-sm:flex-col max-sm:items-center'>
        <button className='flex items-center justify-center text-white fill-white gap-2 uppercase font-normal bg-lf-btn1 px-16 py-4 text-lg hover:bg-lf-btn1-hover transition-all max-sm:w-[80%]'>
          <Play className='w-6 h-6 fill-none stroke-white' />
          Reproducir
        </button>
        <button className='flex items-center justify-center text-white fill-white gap-2 uppercase font-normal bg-lf-btn2 px-16 py-4 text-lg border border-lf-brd hover:bg-lf-btn2-hover transition-all max-sm:w-[80%]'>
          <Plus className='w-6 h-6' />
          Mi lista
        </button>
      </motion.div>
    </div>
  );
};

export default MovieInfo;
