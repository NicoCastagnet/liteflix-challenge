import { motion } from 'framer-motion';
import CountUp from 'react-countup';

function AnimateMovie({ imageMovie, setImageLoader }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      exit={{ opacity: 0 }}
      className='flex flex-col justify-center gap-5 w-full px-16 max-sm:px-4'>
      <motion.div className='flex items-center relative h-5'>
        {imageMovie.includes('image/') && (
          <motion.p
            className='text-left text-white uppercase tracking-wider absolute'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}>
            Cargando{' '}
            <span className='uppercase font-semibold tracking-wider'>
              <CountUp
                start={0}
                end={100}
                duration={2}
                delay={1}
                suffix='%'
                useEasing={true}
              />
            </span>
          </motion.p>
        )}
        {!imageMovie.includes('image/') && (
          <motion.p
            className='text-left text-white uppercase tracking-wider absolute max-sm:text-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.8 }}>
            <span className='uppercase tracking-wider font-medium'>
              ¡Error!{' '}
            </span>
            No se pudo cargar la película.
          </motion.p>
        )}
      </motion.div>
      <motion.div className='flex items-center relative'>
        <div className='w-full bg-white h-2' />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className='w-full h-4 bg-lf-aqua origin-left absolute'
        />
        {!imageMovie.includes('image/') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.0 }}
            className='w-full h-4 bg-red-500 origin-left absolute'
          />
        )}
      </motion.div>
      {!imageMovie.includes('image/') && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className='text-right text-white uppercase tracking-wider font-medium cursor-pointer'
          onClick={() => setImageLoader(false)}>
          Reintentar
        </motion.p>
      )}
      {imageMovie.includes('image/') && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className='text-right text-lf-aqua uppercase tracking-wider font-medium'>
          ¡Listo!
        </motion.p>
      )}
    </motion.div>
  );
}

export default AnimateMovie;
