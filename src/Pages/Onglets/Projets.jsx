import { motion } from 'framer-motion'
import tache from '../../Assets/tache.png'
import statique from '../../Assets/static.png'
function Projets () {
  return (
    <div
      className='flex items-center justify-center w-full h-full text-white lg:h-screen bg-slate-900'
      id='Projets'
    >
      <div className='w-full h-[90%] lg:px-5 px-2 py-20 grid grid-cols-1 lg:grid-cols-4 lg:gap-3 gap-5 lg:overflow-scroll'>
        {/* Projet voalohany */}
        <motion.div
          className=''
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href='https://gestion-de-tache.netlify.app/' target='_blank' rel='noopener noreferrer' className='text-white no-underline'>
            <img src={tache} alt='me' className='w-full h-60' />
            <div className='p-3 text-sm text-center border-b border-white lg:text-base'>
              Gestion de tâche
            </div>
          </a>
        </motion.div>

        {/* Projet voalohany */}
        <motion.div
          className=''
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href='https://niavo.netlify.app/' target='_blank' rel='noopener noreferrer' className='text-white no-underline'>
            <img src={statique} alt='me' className='w-full h-60' />
            <div className='p-3 text-sm text-center border-b border-white lg:text-base'>
              Site statique
            </div>
          </a>
        </motion.div>


      </div>
    </div>
  )
}
export default Projets
