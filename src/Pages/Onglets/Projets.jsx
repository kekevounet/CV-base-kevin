import { motion } from 'framer-motion';
import tache from '../../Assets/tache.png';
import statique from '../../Assets/static.png';
import service from '../../Assets/service.png';
import standart from '../../Assets/standart.png';
function Projets ({ NavBarOuvert }) {
  return (
    <div
      className={`haha flex items-center justify-center w-full h-full text-white lg:h-screen ${NavBarOuvert ? 'blur-sm lg:blur-none' : '' }`}
      id='Projets'
    >
      <div className='w-full h-[90%] lg:px-5 px-2 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-3 gap-5 lg:overflow-scroll'>
        {/* Projet voalohany */}
        <motion.div
          className=''
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href='https://gestion-de-tache.netlify.app/' target='_blank' rel='noopener noreferrer' className='text-white no-underline' title='Simple gestion de tâche'>
            <img src={tache} alt='me' className='w-full h-60' />
            <div className='p-3 text-sm text-center border-b border-white lg:text-base'>
              Simple gestion de tâche
            </div>
          </a>
        </motion.div>

        {/* Projet faharoa */}
        <motion.div
          className=''
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href='https://niavo.netlify.app/' target='_blank' rel='noopener noreferrer' className='text-white no-underline' title='site statique'>
            <img src={statique} alt='me' className='w-full h-60' />
            <div className='p-3 text-sm text-center border-b border-white lg:text-base'>
              Site statique
            </div>
          </a>
        </motion.div>

        {/* Projet fahatelo */}
        <motion.div
          className=''
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href='https://still-service.netlify.app/' target='_blank' rel='noopener noreferrer' className='text-white no-underline' title="Vous voulez avoir une autre comme celui là? ha">
            <img src={service} alt='me' className='w-full h-60' />
            <div className='p-3 text-sm text-center border-b border-white lg:text-base'>
              Still service
            </div>
          </a>
        </motion.div>

        {/* Projet fahaefatra */}
        <motion.div
          className=''
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href='https://stand-art.netlify.app/' target='_blank' rel='noopener noreferrer' className='text-white no-underline' title="Stand'art propose une large de gamme, voyez par vous même.">
            <img src={standart} alt='me' className='w-full h-60' />
            <div className='p-3 text-sm text-center border-b border-white lg:text-base'>
              Stand'art
            </div>
          </a>
        </motion.div>

        {/* Projet fahadimy */}
        <motion.div
          className=''
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href='#Projets' className='text-white no-underline' title="En cours">
            <img src='' alt='Gestion de stock en React et Express Js en cours' className='flex items-center justify-center w-full border h-60 border-whit' />
            <div className='p-3 text-sm text-center border-b border-white lg:text-base'>
            Working project <span><i className="ml-5 text-base fas fa-gear animate-spin"></i></span>
            </div>
          </a>
        </motion.div>


      </div>
    </div>
  )
}
export default Projets;
