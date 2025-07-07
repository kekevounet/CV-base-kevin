import { AiOutlineUser } from "react-icons/ai"; 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
function useIsMobile () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

function NavBar ({NavBarOuvert, setNavBarOuvert}) {

  // Etat
  const AnimNavInitial = { scale: 0 }
  const AnimNavLiInitial = { scale: 0.5 }
  const isMobile = useIsMobile();

  const NavLink = [
    {name:'Accueil', icon:'fa-house-user'},
    {name:'Compétences', icon:'fa-list-check'},
    {name:'Expériences', icon:'fa-briefcase'},
    {name:'Projets', icon:'fa-laptop-code'},
    {name:'Contact', icon:'fa-envelope'}
  ];

  
  
  // Comportement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768)
      {
        setNavBarOuvert(false);
      }
      else
      {
        setNavBarOuvert(true);
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setNavBarOuvert])
  
  // Affichage
  return (
    <motion.div
      className={`fixed flex-row flex items-center justify-between text-white overflow-hidden transition-all duration-500 top-0 z-40 shadow-[-6px_-6px_5px_11px_rgba(255,255,255,0.75)] test 
        ${NavBarOuvert ? 'w-[50%] h-screen lg:h-20 lg:w-full ' : ' h-20 w-full'}
        `}
      initial={AnimNavInitial}
      animate={{ scale: 1, transition: { duration: 0.5 } }}
    >
      {/* items voalohany anatin'ilay Navigation barre */}
      <motion.div
        className='absolute top-5 left-5 lg:static lg:ml-10'
        initial={AnimNavInitial}
        animate={{ scale: 1, transition: { duration: 0.5, delay: 1 } }}
      >
        <Link to='Kevin'>
          <AiOutlineUser className='text-5xl text-white fas fa-user-graduate'
            title='Voir mon CV'/>
        </Link>
      </motion.div>

      {/* items faharoa anatin'ilay Navigation barre */}
      {NavBarOuvert && (
        <div className='flex flex-col items-center justify-center w-full space-x-2 h-1/3 lg:flex-row lg:w-1/2 lg:space-y-0'>
          {NavLink.map(({name, icon})=>(
            <motion.li 
              key={name}
              className='my-3 font-bold list-none'
              initial={AnimNavInitial}
              animate={{ scale: 1, transition: { duration: 0.5, delay: 1.5 } }}
              whileTap={AnimNavLiInitial}
            >
            <a
              href={`#${name}`}
              className='p-4 text-white no-underline transition-all duration-300 rounded-lg hover:bg-stone-700 hover:border-b-2 hover:shadow-[inset_0px_0px_10px_rgb(40,40,40)]'
              title={`${name}`}
              onClick={() => {
                if (isMobile) {
                  setNavBarOuvert(false)
                }
              }}
            >
              <i className={`mr-3 fa-solid ${icon} absolute lg:static left-3`}></i>
              {name}
            </a>
          </motion.li>
          ))}
          <motion.li 
              className='my-3 text-lg font-bold list-none'
              initial={AnimNavInitial}
              animate={{ scale: 1, transition: { duration: 0.5, delay: 1.5 } }}
              whileTap={AnimNavLiInitial}
            >
            <Link
            to='/Terminal'
              className='p-4 text-white no-underline transition-all duration-300 rounded-lg hover:bg-stone-700 hover:border-b hover:shadow-[inset_0px_0px_10px_rgb(40,40,40)]'
              title={`Terminal`}
              onClick={() => {
                if (isMobile) {
                  setNavBarOuvert(false)
                }
              }}
            >
              <i className={`mr-3 fa-solid fa-terminal absolute lg:static left-3`}></i>
              Terminal
            </Link>
          </motion.li>
        </div>
      )}
      {!NavBarOuvert && (
        <div className='flex justify-center w-full text-lg font-bold underline underline-offset-4 lg:hidden'>
          KEVIN
        </div>
      )}

      {/* items fahatelo anatin'ilay Navigation barre fa amin'ny phone iany vo disponible lery */}
      {NavBarOuvert ? (
        <motion.div
          className='absolute transition-all duration-500 cursor-pointer top-5 right-5 lg:hidden'
          initial={AnimNavInitial}
          animate={{ scale: 1, transition: { duration: 0.5, delay: 0.5 } }}
        >
          <i
            className='text-5xl fas fa-xmark'
            onClick={() => setNavBarOuvert(!NavBarOuvert)}
          ></i>
        </motion.div>
      ) : (
        <div className='absolute transition-all duration-500 cursor-pointer top-5 right-5 lg:hidden'>
          <i
            className='text-5xl fas fa-bars'
            onClick={() => setNavBarOuvert(!NavBarOuvert)}
          ></i>
        </div>
      )}
    </motion.div>
  )
}
export default NavBar;
