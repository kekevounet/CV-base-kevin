import { AiOutlineMail } from "react-icons/ai"; 
import { AiOutlineWhatsApp } from "react-icons/ai"; 
import { BsTelephone } from "react-icons/bs"; 
import { motion } from 'framer-motion';
import Kevin from '../../Assets/Kevin.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import circuit from '../../Assets/circuit.png'
import { ImSpinner } from 'react-icons/im';

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
        <ImSpinner  className="text-white text-9xl animate-spin"/>
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
          animate={{ scale: 1, transition: { duration: 0.5, delay: 1.5 } }}
          dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
          // drag
          // dragElastic={1.1}
        >
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='text-lg text-center'>
              MAMINIRINA Niavo <ins className='underline-offset-4'>Kevin</ins>
            </div>
            <hr />
            <div className='flex items-center my-1 text-center'><AiOutlineMail  className="mr-3 text-xl"/><a href="mailto:niavo.kevin9@gmail.com" target='_blank' rel='noopener noreferrer' className='text-white no-underline hover:scale-110'>niavo.kevin9@gmail.com</a></div>
            <div className='flex items-center my-1 text-center'><BsTelephone className="mr-2 text-xl"/> / <AiOutlineWhatsApp className="ml-1 mr-3 text-xl"/><a href="https://wa.me/0389423351" className="text-white no-underline hover:scale-110" target="_blank" rel="nopenner noreferrer">038 94 233 51</a></div>
            <hr />
            <div className='p-2 text-center'>
              Développeur senior en devenir ; ) <br />
              Contactez moi si vous avez des projets en tête.
              
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
        <div className="relative flex items-center justify-center w-full h-[65%] lg:h-screen mt-24 lg:mt-10 lg:w-1/2 lg:scale-100">
          {/* Image de fond */}
          <motion.img
            src={circuit}
            alt="Background"
            className="absolute top-0 left-0 z-0 w-full h-[45%] lg:h-[90%] mt-20 hidden lg:flex"
            initial={{scale: 0 ,opacity:0.5, rotate:'360deg'}}
            animate={{ scale: 1,opacity:1, rotate:0, transition: { duration: 2, delay: 2 } }}
          />

          {/* Image au centre (Kevin) */}
          <div
            className="relative z-10 w-[85%] lg:bottom-0 lg:top-6 h-[280px] lg:w-[33%] lg:h-[31%] overflow-hidden flex justify-center items-center"
          >
            <motion.img
              src={Kevin}
              alt="Kevin"
              title="Niavo Kevin"
              className="absolute object-cover w-full h-full border border-black shadow-lg cursor-move"
              drag
              dragElastic={1.1}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              initial={TextAcceuil}
              animate={{ scale: 1, transition: { duration: 0.5, delay: 1 } }}
            />
          </div>
        </div>

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
