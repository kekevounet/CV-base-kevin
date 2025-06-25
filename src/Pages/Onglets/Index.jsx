import { useState } from 'react';
import Footer from '../Compenents/Footer';
import NavBar from '../Compenents/NavBar';
import Accueil from './Accueil';
import Competences from './Compétence';
import Experience from './Expérience';
import Projets from './Projets';
import Transition from '../Compenents/Transition';

function Index ()
{
  // Etat
    const [NavBarOuvert, setNavBarOuvert] = useState(
      () => window.innerWidth >= 768
    )
  // Affichage
  return (
    <div className={`z-50 w-full h-full`}>
      <NavBar NavBarOuvert = {NavBarOuvert} setNavBarOuvert = {setNavBarOuvert}/>
      <Accueil NavBarOuvert = {NavBarOuvert} />
      <Competences NavBarOuvert = {NavBarOuvert} />
      <Experience NavBarOuvert = {NavBarOuvert} />
      <Projets NavBarOuvert = {NavBarOuvert} />
      <Footer NavBarOuvert = {NavBarOuvert} />
    </div>
  )
}
export default Transition(Index);
