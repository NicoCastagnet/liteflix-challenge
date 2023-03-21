import React, { useState } from 'react';
import Play from '../icons/Play';
import Star from '../icons/Star';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Populars = ({ popular }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <>
      <div className='flex items-center w-56 max-sm:pb-5'>
        <div className='flex flex-col gap-5'>
          {popular.map((movie, i) => {
            return (
              <div
                key={movie.id}
                className='flex flex-col items-center justify-center relative w-56 group overflow-hidden rounded-md '>
                <div className='w-full group'>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${popular[i].backdrop_path}`}
                    className='w-full object-cover object-center rounded-md group-hover:scale-110 transition-all'
                    alt={movie.title}
                    width={5000}
                    height={5000}
                  />
                </div>
                <div className='w-full h-full absolute flex text-white'>
                  {onHover !== movie.id && (
                    <div className='flex flex-col items-center justify-end gap-4 w-full py-3 bg-gradient-to-t from-black rounded-md'>
                      <Play className='fill-none stroke-white w-11 h-11 rounded-full bg-lf-btn2 p-2 border' />
                      <span className='text-sm font-[400] uppercase tracking-[0.2em]'>
                        {movie.title.length > 15
                          ? movie.title.slice(0, movie.title.indexOf(':'))
                          : movie.title}
                      </span>
                    </div>
                  )}
                </div>

                <div
                  className='w-full h-full absolute flex'
                  onMouseEnter={() => setOnHover(movie.id)}
                  onMouseLeave={() => setOnHover(false)}>
                  {onHover === movie.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className='w-full h-full absolute flex flex-col justify-end gap-4 px-4 py-3 text-white bg-[#242424]/70 rounded-md '>
                      <motion.div
                        initial={{ translateX: 150 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 150 }}
                        transition={{ duration: 1.2 }}
                        className='flex items-center gap-2 uppercase tracking-widest'>
                        <Play className='w-8 h-8 p-1 fill-white border rounded-full hover:bg-lf-aqua hover:fill-black hover:border-black transition-all' />
                        {movie.title.length > 15
                          ? movie.title.slice(0, movie.title.indexOf(':'))
                          : movie.title}
                      </motion.div>
                      <motion.div
                        initial={{ translateX: -150 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: -150 }}
                        transition={{ duration: 1.2 }}
                        className='flex justify-between w-full tracking-wider'>
                        <div className='flex items-center gap-2'>
                          <Star className='fill-lf-aqua' />
                          {String(movie.vote_average).replace('.', ',')}
                        </div>
                        <div>{movie.release_date.slice(0, 4)}</div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Populars;
