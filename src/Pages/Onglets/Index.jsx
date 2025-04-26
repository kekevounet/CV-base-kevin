import Footer from '../Compenents/Footer';
import NavBar from '../Compenents/NavBar';
import Accueil from './Accueil';
import Competences from './Compétence';
import Experience from './Expérience';
import Projets from './Projets';
function Index () {
  return (
    <div className='h-full w-full bg-black z-50'>
      <NavBar />
      <Accueil />
      <Competences />
      <Experience />
      <Projets />
      <Footer />
    </div>
  )
}
export default Index
