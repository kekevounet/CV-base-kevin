import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
function NavBar () {
  // Etat
  const [NavBarOuvert, setNavBarOuvert] = useState(
    () => window.innerWidth >= 768
  )
  const AnimNavInitial = { translateY: '-180%' }
  const AnimNavLiInitial = { scale: 0.5 }
  const isMobile = useIsMobile()

  function useIsMobile () {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMobile;
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNavBarOuvert(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  // Comportement
  
  // Affichage
  return (
    <motion.div
      className={`fixed w-full flex items-center justify-between text-white overflow-hidden transition-all duration-500 top-0 z-50 test 
        ${NavBarOuvert ? 'h-1/2 lg:h-20' : ' h-20'}
        `}
      style={{ boxShadow: '0px 10px 10px -10px rgba(255,255,255,0.75)' }}
      initial={AnimNavInitial}
      animate={{ translateY: 0, transition: { duration: 0.5 } }}
    >
      {/* items voalohany anatin'ilay Navigation barre */}
      <motion.div
        className='absolute top-5 left-5 lg:static lg:ml-10'
        initial={AnimNavInitial}
        animate={{ translateY: 0, transition: { duration: 0.5, delay: 1 } }}
      >
        <Link to='Kevin'>
          <i
            className='text-5xl text-white fas fa-user-graduate'
            title='Voir mon CV'
          ></i>
        </Link>
      </motion.div>

      {/* items faharoa anatin'ilay Navigation barre */}
      {NavBarOuvert && (
        <div className='flex flex-col items-center justify-around w-full lg:flex-row lg:w-1/2'>
          <motion.li
            className='my-3 text-lg font-bold list-none'
            initial={AnimNavInitial}
            animate={{
              translateY: 0,
              transition: { duration: 0.5, delay: 1.5 }
            }}
            whileTap={AnimNavLiInitial}
          >
            <a
              href='#Accueil'
              className='p-4 text-white no-underline transition-all duration-200 rounded-lg hover:bg-stone-700 hover:border-b'
              title='Accueil'
              onClick={() => {
                if (isMobile) {
                  setNavBarOuvert(false)
                }
              }}
            >
              <i className='mr-3 fas fa-house-user'></i>
              Accueil
            </a>
          </motion.li>
          <motion.li
            className='my-3 text-lg font-bold list-none'
            initial={AnimNavInitial}
            animate={{ translateY: 0, transition: { duration: 0.5, delay: 2 } }}
            whileTap={AnimNavLiInitial}
          >
            <a
              href='#Compétences'
              className='p-4 text-white no-underline transition-all duration-200 rounded-lg hover:bg-stone-700 hover:border-b'
              title='Compétences'
              onClick={() => {
                if (isMobile) {
                  setNavBarOuvert(false)
                }
              }}
            >
              <i className='mr-3 fas fa-list-check'></i>
              Compétences
            </a>
          </motion.li>
          <motion.li
            className='my-3 text-lg font-bold list-none'
            initial={AnimNavInitial}
            animate={{
              translateY: 0,
              transition: { duration: 0.5, delay: 2.5 }
            }}
            whileTap={AnimNavLiInitial}
          >
            <a
              href='#Expériences'
              className='p-4 text-white no-underline transition-all duration-200 rounded-lg hover:bg-stone-700 hover:border-b'
              title='Expériences'
              onClick={() => {
                if (isMobile) {
                  setNavBarOuvert(false)
                }
              }}
            >
              <i className='mr-3 fas fa-briefcase'></i>
              Expériences
            </a>
          </motion.li>
          <motion.li
            className='my-3 text-lg font-bold list-none'
            initial={AnimNavInitial}
            animate={{ translateY: 0, transition: { duration: 0.5, delay: 3 } }}
            whileTap={AnimNavLiInitial}
          >
            <a
              href='#Projets'
              className='p-4 text-white no-underline transition-all duration-200 rounded-lg hover:bg-stone-700 hover:border-b'
              title='Projets'
              onClick={() => {
                if (isMobile) {
                  setNavBarOuvert(false)
                }
              }}
            >
              <i className='mr-3 fas fa-code'></i>
              Projets
            </a>
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
          animate={{ translateY: 0, transition: { duration: 0.5, delay: 0.5 } }}
        >
          <i
            className='text-5xl fas fa-xmark'
            onClick={() => setNavBarOuvert(!NavBarOuvert)}
          ></i>
        </motion.div>
      ) : (
        <div className='absolute transition-all duration-500 cursor-pointer top-5 right-5 lg:hidden'>
          <i
            className='text-5xl fas fa-bars-staggered'
            onClick={() => setNavBarOuvert(!NavBarOuvert)}
          ></i>
        </div>
      )}
    </motion.div>
  )
}
export default NavBar;
