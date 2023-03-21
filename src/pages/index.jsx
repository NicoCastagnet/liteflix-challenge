import AddMovie from '@/components/AddMovie/AddMovie';
import MovieInfo from '@/components/Movie-info';
import Navbar from '@/components/Navbar';
import getPopular from '@/helpers/getPopular.js';
import getFeatured from '@/helpers/getFeatured.js';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Movies from '@/components/Movies/Movies';
import { AnimatePresence, motion } from 'framer-motion';
import PageLoader from '@/components/PageLoader';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getPopular().then((res) => setPopular(res));
      getFeatured()
        .then((res) => setFeatured(res))
        .then(setIsLoading(false));
    }, 2500);
  }, []);

  return !isLoading ? (
    <>
      <Head>
        <title>Liteflix</title>
      </Head>
      <Image
        src={`https://image.tmdb.org/t/p/w1280/${featured.backdrop_path}`}
        alt='bg-img'
        width={5000}
        height={5000}
        className='w-full h-screen object-cover object-center absolute -z-10'
      />
      <div className='bg-black opacity-40 w-full h-screen absolute -z-10 max-sm:bg-gradient-to-t max-sm:from-[#242424] max-sm:to-[#242424]/40 max-sm:bg-transparent max-sm:opacity-100' />
      <AnimatePresence>
        {showModal === true ? <AddMovie setShowModal={setShowModal} /> : ''}
      </AnimatePresence>
      <div className='px-32 max-sm:px-0'>
        <Navbar setShowModal={setShowModal} />
        <div className='flex gap-10 h-[85vh] max-sm:flex-col'>
          <MovieInfo name={featured.title} />
          <Movies popular={popular} />
        </div>
      </div>
    </>
  ) : (
    <PageLoader />
  );
}
