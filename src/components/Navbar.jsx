import React from 'react';
import Bell from './icons/Bell';
import List from './icons/List';
import Plus from './icons/Plus';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = ({ setShowModal }) => {
  return (
    <motion.section
      initial={{ translateY: -150 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className='w-full flex bg-transparent justify-between py-5 text-white fill-white max-sm:items-center max-sm:justify-between max-sm:px-5'>
      <div className='flex items-center text-center gap-20'>
        <h1 className='uppercase text-lf-aqua font-semibold text-4xl max-sm:hidden'>
          Lite<span className='font-light'>flix</span>
        </h1>
        <button
          className='flex items-center gap-2 font-semibold'
          onClick={() => setShowModal(true)}>
          <Plus className='w-6 h-6 max-sm:border max-sm:rounded-full max-sm:p-1 max-sm:w-8 max-sm:h-8' />
          <p className='uppercase text-lg max-sm:hidden'>Agregar película</p>
        </button>
      </div>
      <h1 className='uppercase text-lf-aqua font-semibold text-3xl max-sm:flex hidden'>
        Lite<span className='font-normal'>flix</span>
      </h1>
      <div className='flex gap-10 items-center justify-center'>
        <List className='w-7 h-7 cursor-pointer max-sm:hidden' />
        <div className='cursor-pointer max-sm:hidden'>
          <Bell className='w-6 h-6' />
          <span className='h-2 w-2 bg-lf-aqua rounded-full inline-flex absolute top-[1.80rem] right-[12.6rem]' />
          <span className='animate-ping h-3 w-3 bg-lf-aqua rounded-full inline-flex absolute top-7 right-[12.5rem]' />
        </div>
        <Image
          src='/assets/profile.webp'
          alt='user-profile'
          className='w-8 h-8 rounded-full cursor-pointer'
          width={5000}
          height={5000}
        />
      </div>
    </motion.section>
  );
};

export default Navbar;
