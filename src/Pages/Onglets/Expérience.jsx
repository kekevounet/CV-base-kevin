import { motion } from 'framer-motion'
import exp from '../../Assets/exp.JPG'

function Experience ({ NavBarOuvert }) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full text-sm text-white lg:h-screen lg:text-sm ${NavBarOuvert ? 'blur-sm lg:blur-none' : '' }`}
      id='Expériences'
    >
      <div className='flex flex-col w-full mx-2 mt-20 rounded-lg h-[60%] lg:mx-5 lg:flex-row lg:justify-between '>
        {/* eto daolo ny compétences */}
        <motion.div
          className='w-full h-[100%] p-2 rounded-lg bg-stone-900 bg-opacity-90 lg:h-full lg:p-5 lg:mr-10 lg:w-1/2 lg:ml-36 border-b border-white'
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Exp 1 */}
          <div className='relative p-3 text-left border-t rounded-lg lg:text-center bg-stone-700 bg-opacity-90'>
            Développeur web - Stand'Art en React Js{' '}
            <span className='absolute right-5'>
              <i className='fas fa-hourglass'></i> Actuellement
            </span>
          </div>
          <div className='p-3'>
            <li className='text-sm lg:text-base'>
              Conception et développement d'un site vitrine interactif pour
              Stand'Art, avec une interface utilisateur intuitive.
            </li>
            <li className='text-sm lg:text-base'>
              Intégration de fonctionnalités
              avancées pour une navigation optimale.
            </li>
            <li className='text-sm lg:text-base'>
              Utilisation de technologies modernes pour garantir la performance
              du site.
              {/* 
              

____    ____       ______    ____      ____  ____  _____   ______   
|    |  |    |  ___|\\     \\  |    |    |    ||    ||\\    \\ |\\    \\  
|    |  |    | |     \\     \\ |    |    |    ||    | \\    \\| \\     \\ 
|    | /    // |     ,_____/||    |    |    ||    |  \\|    \\  \\    |
|    |/ _ _//  |     \\--'\\_|/|    |    |    ||    |   |     \\  |    |
|    |\\    \\'  |     /___/|  |    |    |    ||    |   |      \\ |    |
|    | \\    \\  |     \\____|\\ |\\    \\  /    /||    |   |    |\\ \\|    |
|____|  \\____\\ |____ '     /|| \\ ___\\/___ / ||____|   |____||\\_____/|
|    |   |    ||    /_____/ | \\ |   ||   | / |    |   |    |/ \\|   ||
|____|   |____||____|     | /  \\|___||___|/  |____|   |____|   |___|/
  \\(       )/    \\( |_____|/     \\(    )/      \\(       \\(       )/  
   '       '      '    )/         '    '        '        '       '   
                       '                                             



              
              */}

              {/* 
              
              
$$\\   $$\\                    $$\\           
$$ | $$  |                   \\__|          
$$ |$$  / $$$$$$\\ $$\\    $$\\ $$\\ $$$$$$$\\  
$$$$$  / $$  __$$\\ $$\\  $$  |$$ |$$  __$$\\ 
$$  $$<  $$$$$$$$ |\\$$\\$$  / $$ |$$ |  $$ |
$$ |\\$$\\ $$   ____| \\$$$  /  $$ |$$ |  $$ |
$$ | \\$$\\$$$$$$$\\    \\$  /   $$ |$$ |  $$ |
\\__|  \\__|\\_______|   \\_/    \\__|\\__|  \\__|
     
*/}
            </li>
          </div>

          {/* Exp 2 */}
          <div className='relative p-3 text-left border-t rounded-lg lg:text-center bg-stone-700 bg-opacity-90'>
            Stagiare - MEN EN PHP{' '}
            <span className='absolute right-5'>
              <i className='fas fa-hourglass-end'></i> Mai - Août 2024
            </span>
          </div>
          <div className='p-3'>
            <li className='text-sm lg:text-base'>
              Conception et développement d'une plateforme de gestion des
              intrants scolaires pour le Ministère de l'Éducation Nationale
              (MEN).
            </li>
            <li className='text-sm lg:text-base'>
              Intégration de fonctionnalités de recherche et de filtrage
              avancées pour une navigation optimale.
            </li>
            <li className='text-sm lg:text-base'>
              Optimisation de l'interface utilisateur pour une utilisation
              simplifiée par les agents du MEN.
            </li>
          </div>

          {/* Exp 3 */}
          <div className='relative p-3 text-left border-t rounded-lg lg:text-center bg-stone-700 bg-opacity-90'>
            Stagiare - SUNRISE{' '}
            <span className='absolute right-5'>
              <i className='fas fa-hourglass-end'></i> Novembre 2023
            </span>
          </div>
          <div className='p-3'>
            <li className='text-sm lg:text-base'>
              Découverte du fonctionnement interne de l'entreprise et des
              processus opérationnels.
            </li>
            <li className='text-sm lg:text-base'>
              Observation des pratiques professionnelles en développement et
              gestion de projets.
            </li>
            <li className='text-sm lg:text-base'>
              Participation à des réunions d'équipe et analyse des méthodes de
              travail.
            </li>
          </div>
        </motion.div>

        {/* eto le sary exp iny */}
        <div className='flex justify-center w-full p-2 mt-10 text-center rounded-lg lg:mt-0 h-1/2 lg:h-full lg:p-5 lg:ml-10 lg:w-1/2 lg:scale-[0.9]'>
          <motion.img
            src={exp}
            alt='exp'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1,delay:0.5 }}
            className='rounded-lg'
          ></motion.img>
        </div>
      </div>
    </div>
  )
}
export default Experience
