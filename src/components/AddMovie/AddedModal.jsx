import React from 'react';
import Plus from '../icons/Plus';

const AddedModal = ({ setShowModal, movie }) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center absolute bg-lf-btn2 z-50'>
      <div className='h-[60%] w-[50%] bg-lf-btn1 flex flex-col max-sm:w-full max-sm:h-full'>
        <div className='w-full flex justify-end pr-5 pt-5 max-sm:hidden'>
          <Plus
            className='h-6 w-6 fill-white rotate-45 cursor-pointer'
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className='h-full flex flex-col items-center justify-between py-10'>
          <h1 className='uppercase text-lf-aqua font-semibold text-5xl'>
            Lite<span className='font-normal'>flix</span>
          </h1>
          <div className='flex flex-col items-center space-y-5'>
            <p className='text-white uppercase tracking-wider text-2xl font-semibold'>
              ¡felicitaciones!
            </p>
            <p className='text-white uppercase tracking-wider text-2xl'>
              {movie} fue correctamente subida.
            </p>
          </div>
          <button
            className='bg-white text-black w-60 h-14 uppercase tracking-wider max-sm:flex max-sm:items-center max-sm:justify-center'
            onClick={() => setShowModal(false)}>
            Ir a home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedModal;
