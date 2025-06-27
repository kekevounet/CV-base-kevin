import { BiXCircle } from "react-icons/bi"; 
import { AiOutlineInfoCircle } from "react-icons/ai"; 
import { useEffect, useState } from 'react';
import Footer from '../Compenents/Footer';
import NavBar from '../Compenents/NavBar';
import Accueil from './Accueil';
import Competences from './Compétence';
import Experience from './Expérience';
import Projets from './Projets';
import Transition from '../Compenents/Transition';
import { Link } from 'react-router-dom';

function Index ()
{
  // Etat
    const [NavBarOuvert, setNavBarOuvert] = useState(
      () => window.innerWidth >= 768
    )
    const [showAlert, setShowAlert] = useState(false);
    
      useEffect(() => {
        // Pop après 20 secondes
        const timerShow = setTimeout(() => {
          setShowAlert(true);
    
          // Disparition après 5 secondes
          const timerHide = setTimeout(() => {
            setShowAlert(false);
          }, 50000); // ici tu peux changer le temps de disparition
    
          return () => clearTimeout(timerHide); // clean-up
        }, 1000); // ici tu changes le temps d’apparition (20s)
    
        return () => clearTimeout(timerShow); // clean-up
      }, []);

      
  // Affichage
  return (
    <div className={`z-50 w-full h-full`}>
      <NavBar NavBarOuvert = {NavBarOuvert} setNavBarOuvert = {setNavBarOuvert}/>
      <Accueil NavBarOuvert = {NavBarOuvert} />
      <Competences NavBarOuvert = {NavBarOuvert} />
      <Experience NavBarOuvert = {NavBarOuvert} />
      <Projets NavBarOuvert = {NavBarOuvert} />
      <Footer NavBarOuvert = {NavBarOuvert} />
      {showAlert && (
        <div className="bg-slate-800 rounded-md lg:right-5 text-white bottom-5 right-0 fixed lg:w-1/5 lg:h-[5%] w-full h-[5%] items-center flex justify-between p-3 border-white border">
          <AiOutlineInfoCircle className=" text-xl"/>
            <Link to='/Terminal' className='text-white font-bold no-underline hover:font-extrabold hover:text-gray-200 transition-all duration-300 text-left'>
              Cliquer ici pour accéder au mini console.
            </Link>
          <BiXCircle className="hover:text-red-500  text-xl cursor-pointer" onClick={()=>setShowAlert(false)}/>
      </div>
      )}
    </div>
  )
}
export default Transition(Index);
