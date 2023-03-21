import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Check from '../icons/Check';
import Chevron from '../icons/Chevron';
import MyMovies from './MyMovies';
import Populars from './Populars';

const Movies = ({ popular }) => {
  const [option, setOption] = useState('populares');
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className='flex flex-col items-center justify-center gap-5 relative'>
      <div
        className='text-white text-lg uppercase flex items-center top-24 gap-2 cursor-pointer absolute max-sm:-top-10'
        onClick={() => setOpenDropdown(!openDropdown)}>
        Ver: <span className='font-semibold'>{option}</span>
        <Chevron
          className={`w-4 h-4 stroke-white fill-white transition-transform ${
            openDropdown ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`bg-lf-btn1 flex flex-col items-left h-auto w-full py-3 text-white font-semibold z-20 top-[8.5rem] space-y-1 ${
          openDropdown ? 'absolute' : 'hidden'
        } max-sm:top-0 max-sm:w-[75%]`}>
        <span className='bg-lf-btn1 rotate-45 w-3 h-3 absolute left-36 -top-1'></span>
        <div
          className='flex items-center justify-between uppercase tracking-wider hover:bg-lf-brd/20 px-7 cursor-pointer'
          onClick={() => {
            setOption('populares'), setOpenDropdown(!openDropdown);
          }}>
          Populares{' '}
          <Check
            className={`w-5 h-5 ${
              option === 'populares' ? 'visible' : 'hidden'
            }`}
          />
        </div>
        <div
          className='flex items-center justify-between uppercase tracking-wider hover:bg-lf-brd/20 px-7 cursor-pointer'
          onClick={() => {
            setOption('mi lista'), setOpenDropdown(!openDropdown);
          }}>
          Mi lista{' '}
          <Check
            className={`w-5 h-5 ${
              option === 'mi lista' ? 'visible' : 'hidden'
            }`}
          />
        </div>
      </div>
      {option === 'populares' ? <Populars popular={popular} /> : <MyMovies />}
    </motion.div>
  );
};

export default Movies;
