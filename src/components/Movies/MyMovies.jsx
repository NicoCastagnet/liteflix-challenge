import React, { useEffect, useState } from 'react';
import Play from '../icons/Play';
import Star from '../icons/Star';
import Image from 'next/image';
import Exclamation from '../icons/Exclamation';

const MyMovies = () => {
  const [onHover, setOnHover] = useState(false);
  const [dataLocalStorage, setDataLocalStorage] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('movieData') !== null) {
      const getData = localStorage.getItem('movieData');
      const dataMovieLocalStorage = JSON.parse(getData);
      setDataLocalStorage(dataMovieLocalStorage);
    }
  }, []);

  return (
    <>
      <div className='flex items-center w-56 h-full'>
        <div className='flex items-center h-[65%] justify-start flex-col max-sm:h-full max-sm:pb-5'>
          <div className='flex flex-col gap-5 overflow-auto'>
            {dataLocalStorage.length ? (
              dataLocalStorage.map((movie, i) => {
                return (
                  <div
                    key={movie.id}
                    className='flex flex-col items-center justify-center relative w-56'>
                    <div className='w-full'>
                      <Image
                        src={movie.image}
                        className='w-full object-cover aspect-video object-center rounded-md'
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
                        <div className='w-full h-full absolute flex flex-col justify-end gap-4 px-4 py-3 text-white bg-[#242424]/70 rounded-md'>
                          <div className='flex items-center gap-2 uppercase tracking-widest'>
                            <Play className='w-8 h-8 p-1 fill-white border rounded-full hover:bg-lf-aqua hover:fill-black hover:border-black transition-all' />
                            {movie.title.length > 15
                              ? movie.title.slice(0, movie.title.indexOf(':'))
                              : movie.title}
                          </div>
                          <div className='flex justify-between w-full tracking-wider'>
                            <div className='flex items-center gap-2'>
                              <Star className='fill-lf-aqua' />
                              {String(movie.points)
                                .slice(0, 3)
                                .replace('.', ',')}
                            </div>
                            <div>{Date.now}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className='flex flex-col items-center justify-center p-5 text-lg text-center w-56 text-white bg-white/10 backdrop-blur-md rounded-md aspect-video gap-2'>
                <Exclamation className='w-5 h-5' />
                No agregaste ninguna película aún.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyMovies;
