import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function NavBar({ NavBarOuvert, setNavBarOuvert }) {
  // Etat
  const AnimNavInitial = { scale: 0 };
  const isMobile = useIsMobile();

  const NavLink = [
    { name: "Accueil", icon: <FaHome /> },
    { name: "Compétences", icon: <BsFillPersonCheckFill />},
    { name: "Expériences", icon: <BsFillBriefcaseFill /> },
    { name: "Projets", icon: <FaLaptopCode /> },
    { name: "Contact", icon: <BsFillEnvelopeFill /> },
  ];

  // Comportement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNavBarOuvert(false);
      } else {
        setNavBarOuvert(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setNavBarOuvert]);

  // Affichage
  return (
    <motion.div
      className={`fixed flex-row flex items-center justify-between text-white overflow-hidden transition-all duration-500 top-0 z-40 shadow-[-6px_-6px_5px_11px_rgba(255,255,255,0.75)] test
        ${NavBarOuvert ? "w-[50%] h-screen lg:h-20 lg:w-full " : " h-20 w-full"}
        `}
      initial={AnimNavInitial}
      animate={{ scale: 1, transition: { duration: 0.5 } }}
    >
      {/* items voalohany anatin'ilay Navigation barre */}
      <motion.div
        className="absolute top-5 left-5 lg:static lg:ml-10"
        initial={AnimNavInitial}
        animate={{ scale: 1, transition: { duration: 0.5, delay: 1 } }}
        whileTap={{ scale: 0.5 }}
      >
        <Link to="Kevin">
          <AiOutlineUser
            className="text-5xl text-white fas fa-user-graduate "
            title="Voir mon CV"
          />
        </Link>
      </motion.div>


      {/* items faharoa anatin'ilay Navigation barre */}
      {NavBarOuvert && (
        <div className="flex flex-col items-center mr-10 justify-center w-full space-x-2 h-1/3 lg:flex-row lg:w-1/2 lg:space-y-0">
          {NavLink.map(({ name, icon }) => (
            <motion.li
              key={name}
              className="my-3 font-bold list-none w-full"
              initial={AnimNavInitial}
              animate={{ scale: 1, transition: { duration: 0.5, delay: 1.5 } }}
            >
              <a
                href={`#${name}`}
                className="p-4 text-white relative no-underline transition-all group flex duration-300 lg:w-full w-[130%]"
                title={`${name}`}
                onClick={() => {
                  if (isMobile) {
                    setNavBarOuvert(false);
                  }
                }}
              >
                <span className="mr-3 absolute lg:static left-3 text-2xl z-40">{icon}</span>
                <span className="z-40 w-full flex justify-center">{name}</span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-0 top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[10%] transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-[20%] top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[30%] transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-[40%] top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[50%] transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-[60%] top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[70%] transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-[80%] top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[90%] transition-all duration-500"></span>
              </a>
            </motion.li>
          ))}
          <motion.li
            className="my-3 text-lg font-bold list-none w-full"
            initial={AnimNavInitial}
            animate={{ scale: 1, transition: { duration: 0.5, delay: 1.5 } }}
          >
            <Link
              to="/Terminal"
              className="p-4 flex text-white no-underline transition-all duration-300 group relative lg:w-full w-[130%]"
              title={`Terminal`}
              onClick={() => {
                if (isMobile) {
                  setNavBarOuvert(false);
                }
              }}
            >
              <i
                className={`mr-3 fa-solid fa-terminal absolute lg:static left-3`}
              ></i>
              <span className=" flex justify-center z-40 w-full">Terminal</span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-0 top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[10%] transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-[20%] top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[30%] transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-[40%] top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[50%] transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-[60%] top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[70%] transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full left-[80%] top-0 transition-all duration-500"></span>
                <span className="bg-stone-700 w-[10%] h-0 -z-10 absolute group-hover:h-full bottom-0 left-[90%] transition-all duration-500"></span>
            </Link>
          </motion.li>
        </div>
      )}
      {!NavBarOuvert && (
        <div className="flex justify-center w-full text-lg font-bold underline underline-offset-4 lg:hidden">
          KEVIN
        </div>
      )}

      {/* items fahatelo anatin'ilay Navigation barre fa amin'ny phone iany vo disponible lery */}
      {NavBarOuvert ? (
        <motion.div
          className="absolute transition-all duration-500 cursor-pointer top-5 right-5 lg:hidden"
          initial={AnimNavInitial}
          animate={{ scale: 1, transition: { duration: 0.5, delay: 0.5 } }}
        >
          <motion.i
            className="text-5xl fas fa-xmark"
            onClick={() => setNavBarOuvert(!NavBarOuvert)}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.5 }}
          ></motion.i>
        </motion.div>
      ) : (
        <div className="absolute transition-all duration-500 cursor-pointer top-5 right-5 lg:hidden">
          <i
            className="text-5xl fas fa-bars"
            onClick={() => setNavBarOuvert(!NavBarOuvert)}
          ></i>
        </div>
      )}
    </motion.div>
  );
}
export default NavBar;
