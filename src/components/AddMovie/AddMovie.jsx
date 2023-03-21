import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AddedModal from './AddedModal';
import Clip from '../icons/Clip';
import Plus from '../icons/Plus';
import AnimateMovie from './AnimateMovie';
import Image from 'next/image';

const AddMovie = ({ setShowModal }) => {
  const [imageLoader, setImageLoader] = useState(false);
  const [handleButton, setHandleButton] = useState(true);
  const [uploading, setUploading] = useState(true);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(false);

  const [imageMovie, setImageMovie] = useState('');
  const [titleMovie, setTitleMovie] = useState('');

  const loadImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file !== undefined) {
      const fileType = file.type;
      const validExtension = ['image/jpeg', 'image/jpg', 'image/png'];

      if (validExtension.includes(fileType)) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = (e) => {
          setImageLoader(true);
          setImageMovie(e.target.result);
          validateInputs();
        };
      } else {
        setImageMovie('failed');
        setImageLoader(true);
      }
    }
  };

  const handleTitleMovie = (e) => {
    setTitleMovie(e.target.value);
  };

  const validateInputs = () => {
    if (imageMovie.includes('image/') && titleMovie != '') {
      setHandleButton(false);
    } else {
      setHandleButton(true);
    }
  };

  const loadDataLocalStorage = () => {
    if (localStorage.getItem('movieData') !== null) {
      const getData = localStorage.getItem('movieData');
      const dataMovieLocalStorage = JSON.parse(getData);

      const movieData = {
        image: imageMovie,
        title: titleMovie,
        id: crypto.randomUUID(),
        points: Math.random() * 11,
      };

      localStorage.setItem(
        'movieData',
        JSON.stringify([...dataMovieLocalStorage, movieData])
      );
      setUploading(false);
    } else {
      const movieData = {
        image: imageMovie,
        title: titleMovie,
        id: crypto.randomUUID(),
        points: Math.random() * 11,
      };

      localStorage.setItem('movieData', JSON.stringify([movieData]));
      setUploading(false);
    }
  };

  useEffect(() => {
    validateInputs();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='w-screen h-screen flex justify-center items-center absolute bg-lf-btn2 z-50'>
      {!uploaded ? (
        <motion.div
          initial={{ translateY: -1100 }}
          animate={{ translateY: 0 }}
          exit={{ translateY: -1100 }}
          transition={{ duration: 1.2 }}
          className='h-[60%] w-[50%] bg-lf-btn1 flex flex-col max-sm:w-full max-sm:h-full'>
          <div className='w-full flex justify-end p-5 max-sm:hidden'>
            <Plus
              className='h-6 w-6 fill-white rotate-45 cursor-pointer'
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className='w-full p-5 hidden pl-32 max-sm:flex gap-20'>
            <h1 className='uppercase text-lf-aqua font-semibold text-2xl'>
              Lite<span className='font-normal'>flix</span>
            </h1>
            <Image
              src='/assets/profile.webp'
              alt='user-profile'
              className='w-8 h-8 rounded-full cursor-pointer'
              width={5000}
              height={5000}
            />
          </div>
          <div className='h-full flex flex-col items-center justify-evenly'>
            <h1 className='text-lf-aqua uppercase text-lg font-semibold tracking-wider'>
              Agregar película
            </h1>
            {!imageLoader ? (
              <label className='flex items-center gap-2 border border-dashed border-white uppercase text-white font-medium p-10 tracking-wider cursor-pointer'>
                <Clip className='w-5 h-5 -rotate-45' />
                <span className='max-sm:hidden'>
                  Agrega un archivo o arrastralo y soltalo aquí
                </span>
                <span className='max-sm:flex hidden'>Agrega un archivo</span>
                <input
                  type={'file'}
                  className='hidden'
                  onChange={(e) => loadImage(e)}
                />
              </label>
            ) : (
              <AnimateMovie imageMovie={imageMovie} />
            )}
            <input
              type='text'
              placeholder='título'
              className='bg-transparent flex items-center text-center uppercase font-normal text-white border-b-2 py-2 px-3 w-60 outline-none tracking-wider focus:bg-lf-btn1-hover focus:border-lf-aqua transition-all placeholder:text-white'
              onChange={(e) => handleTitleMovie(e)}
            />
            <div className='flex flex-col gap-5'>
              <button
                disabled={handleButton}
                onClick={() => {
                  loadDataLocalStorage();
                  setUploaded(true);
                  setTimeout(() => {
                    setHandleButton(true);
                  }, 100);
                }}
                className='bg-white/50 w-60 h-14 uppercase tracking-wider disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/50'>
                Subir película
              </button>
              <button
                onClick={() => setShowModal(false)}
                className='bg-lf-btn2 border border-lf-brd text-white w-60 h-14 uppercase tracking-wider hidden max-sm:flex max-sm:items-center max-sm:justify-center'>
                Salir
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <AddedModal
          setShowModal={setShowModal}
          movie={titleMovie}
        />
      )}
    </motion.div>
  );
};

export default AddMovie;
