import Footer from '../Compenents/Footer';
import NavBar from '../Compenents/NavBar';
import Accueil from './Accueil';
import Competences from './Compétence';
import Experience from './Expérience';
import Projets from './Projets';
function Index () {
  return (
    <div className='z-50 w-full h-full'>
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
