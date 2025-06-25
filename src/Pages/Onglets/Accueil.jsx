import { motion } from 'framer-motion';
import Kevin from '../../Assets/Kevin.JPG';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GiSpinalCoil } from 'react-icons/gi';

function Accueil ({NavBarOuvert}) {
  // Etat
  const TextAcceuil = { scale: 0 }
  const [Chargement, setChargement] = useState(true);

  //Comportement

  useEffect(() => {
    
    setTimeout(() => {
      setChargement(false);
    }, 3000);
  }, []);

  if (Chargement) {
    return (
      <div className="flex items-center justify-center h-screen bg-stone-700">
        <GiSpinalCoil className="text-white text-9xl animate-spin"/>
      </div>
    );
  }

  //Affichage
  return (
    <div
      className={`flex items-center justify-center w-full h-full text-sm text-white bg-opacity-0 lg:h-screen lg:text-base ${NavBarOuvert ? 'blur-sm lg:blur-none' : '' }`}
      id='Accueil'
    >
      <div className='flex flex-col-reverse items-center justify-between w-full p-2 lg:p-3 h-2/3 lg:flex-row'>
        {/* eto le contenu voalohany */}
        <motion.div
          className='items-center justify-center w-full h-auto p-3 border-b border-double lg:ml-10 lg:w-1/2 lg:h-full'
          initial={TextAcceuil}
          animate={{ scale: 1, transition: { duration: 0.5, delay: 3.5 } }}
          dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
          // drag
          // dragElastic={1.1}
        >
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='text-lg text-center'>
              MAMINIRINA Niavo <ins className='underline-offset-4'>Kevin</ins>
            </div>
            <hr />
            <div className='text-center'>niavo.kevin9@gmail.com</div>
            <div className='text-center'>038 94 233 51</div>
            <hr />
            <div className='p-2 text-center'>
              Je suis actuellement à la recherche d'un stage ou d'une
              opportunité d'embauche pour développer d’avantage mes compétences
              techniques, tout en apportant mon expertise dans un environnement
              dynamique.
            </div>

            <div className='flex flex-row justify-around w-full mt-5 space-x-5'>
              <motion.a
                className='w-full lg:w-[40%] p-3 text-center text-white no-underline border-b rounded-lg bg-stone-900 bg-opacity-90 animate-bounce hover:bg-stone-800'
                whileTap={{ scale: 0.5 }}
                title='niavo.kevin9@gmail.com'
                href='mailto:niavo.kevin9@gmail.com' target='_blank' rel='noopener noreferrer'
              >
                <i className='mr-5 fas fa-envelope'></i>
                Contactez-moi
              </motion.a>
              <motion.div
                className='w-full lg:w-[40%] p-3 text-center border-b rounded-lg bg-stone-900 bg-opacity-90 hover:bg-stone-800'
                whileTap={{ scale: 0.5 }}
                title='Niavo Kevin'
              >
                <i className='mr-5 fas fa-address-card'></i>
                <Link to='Kevin' className='w-full p-2 text-white no-underline'>
                  Voir mon CV
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* eto le contenu faharoany */}
        <motion.div
          className='flex items-center justify-center w-full mt-10 lg:w-1/2 lg:h-full h-96'
          initial={TextAcceuil}
          animate={{ scale: 1, transition: { duration: 0.5, delay: 4 } }}
        >
          <div
            className=' w-[80%] h-[280px] lg:rounded-full lg:w-[55%] lg:h-[80%] overflow-hidden flex justify-center items-center object-cover border-l border-t border-r border-b'
            alt='mlskdjqslmkdfjqslmkdjfqslmkdfjqslmkmjdf'
            style={{ boxShadow: '0px 10px 10px -5px rgba(255,255,255,0.75)' }}
          >
            <motion.img
              src={Kevin}
              alt='Kevin'
              className='lg:rounded-full'
              title='Niavo Kevin'
              dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
              drag
              dragElastic={1.1}
            >
  
            </motion.img>
          </div>
        </motion.div>
      </div>
      {/* <div
      className='bg-black w-[70%] h-1/2 rounded-full lg:w-[28%] lg:h-[80%] overflow-hidden p-5 flex justify-center items-center object-contain border-l border-t border-r border-b'
      style={{ boxShadow: '0px 10px 10px -5px rgba(255,255,255,0.75)' }}
      >
      Sariko no eto
      </div> */}
    </div>
  )
}
export default Accueil
