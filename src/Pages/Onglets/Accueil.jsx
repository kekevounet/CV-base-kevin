import { AiOutlineMail } from "react-icons/ai"; 
import { AiOutlineWhatsApp } from "react-icons/ai"; 
import { BsTelephone } from "react-icons/bs"; 
import { motion } from 'framer-motion';
import Kevin from '../../Assets/Kevin.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import circuit from '../../Assets/circuit.png'
import { ImSpinner } from 'react-icons/im';
import Kevin2 from '../../Assets/circuit2.png';
import { Parallax } from 'react-scroll-parallax';
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

      className={`flex overflow-hidden items-center justify-center w-full h-full text-sm text-white bg-opacity-0 lg:h-screen lg:text-base ${NavBarOuvert ? 'blur-sm lg:blur-none' : '' }`}
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
            Développeur Senior en devenir <br />
            Passionné par le développement web et mobile, je suis prêt à relever vos défis technologiques. <br />
            N’hésitez pas à me contacter pour discuter de vos projets ambitieux.
              
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
        <Parallax 
        rotate={[ '90', '-90']}
        speed={-10}
        className="relative flex items-center justify-center w-full h-[65%] lg:h-screen mt-24 lg:mt-10 lg:w-1/2 lg:scale-100">
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
            className="relative z-10 w-[85%] lg:bottom-0 lg:top-6 h-[280px] lg:w-[33%] lg:h-[31%] overflow-hidden lg:flex justify-center items-center hidden"
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
          
          <div
            className="relative z-10 w-[100%] h-[70vh] overflow-hidden flex justify-center items-center lg:hidden"
          >
            <motion.img
              src={Kevin2}
              alt="Kevin"
              title="Niavo Kevin"
              className="absolute object-cover w-full h-full shadow-lg"
              // drag
              dragElastic={1.1}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              initial={TextAcceuil}
              animate={{ scale: 1, transition: { duration: 0.5, delay: 1 } }}
            />
          </div>
        </Parallax>

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



// // 📁 ParallaxExamples.jsx
// // 20 exemples différents d'effets parallax à tester avec React + Tailwind + react-scroll-parallax

// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

// export default function ParallaxExamples() {
//   return (
//     <ParallaxProvider>
//       <div className="space-y-48">

//         {/* 1. Image de fond fixe */}
//         <div className="h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://picsum.photos/id/1015/1920/1080)' }}>
//           <h1 className="pt-48 text-5xl font-bold text-center text-white">Image Fixe</h1>
//         </div>

//         {/* 2. Texte lent */}
//         <Parallax speed={-20}>
//           <h2 className="text-4xl font-bold text-center text-blue-800">Texte qui défile lentement</h2>
//         </Parallax>

//         {/* 3. Texte rapide */}
//         <Parallax speed={20}>
//           <h2 className="text-4xl font-bold text-center text-red-600">Texte qui défile rapidement</h2>
//         </Parallax>

//         {/* 4. Zoom sur image */}
//         <div className="relative h-screen overflow-hidden">
//           <Parallax scale={[1, 1.5]}>
//             <img src="https://picsum.photos/id/1016/1920/1080" className="object-cover w-full h-full" />
//           </Parallax>
//         </div>

//         {/* 5. Bloc superposé */}
//         <div className="relative flex items-center justify-center h-screen bg-gray-800">
//           <Parallax speed={-10}>
//             <div className="z-10 p-12 bg-white rounded-lg shadow-xl">Bloc superposé</div>
//           </Parallax>
//         </div>

//         {/* 6. Section sticky + scroll */}
//         <div className="h-[200vh] relative">
//           <div className="sticky text-3xl font-bold text-center text-gray-800 top-1/3">Je reste visible pendant le scroll</div>
//         </div>

//         {/* 7. Parallax inversé */}
//         <Parallax speed={30}>
//           <p className="text-xl text-center text-purple-700">Défilement plus rapide que le scroll</p>
//         </Parallax>

//         {/* 8. Superposition de 2 textes */}
//         <div className="relative h-screen">
//           <Parallax speed={-10}><h2 className="absolute text-4xl top-20 left-10">Texte arrière</h2></Parallax>
//           <Parallax speed={10}><h2 className="absolute text-4xl text-red-500 top-40 left-20">Texte avant</h2></Parallax>
//         </div>

//         {/* 9. Titre en fondu */}
//         <Parallax opacity={[0, 1]}>
//           <h2 className="text-4xl font-bold text-center text-black">Titre en fondu progressif</h2>
//         </Parallax>

//         {/* 10. Grille flottante */}
//         <Parallax speed={-5}>
//           <div className="grid grid-cols-2 gap-4 px-10">
//             <div className="p-6 bg-gray-300 rounded">Bloc A</div>
//             <div className="p-6 bg-gray-300 rounded">Bloc B</div>
//           </div>
//         </Parallax>

//         {/* 11. Image qui sort du cadre */}
//         <Parallax translateY={['100px', '-100px']}>
//           <img src="https://picsum.photos/id/1020/600/400" className="mx-auto shadow rounded-xl" />
//         </Parallax>

//         {/* 12. Forme animée */}
//         <Parallax speed={-15}>
//           <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full"></div>
//         </Parallax>

//         {/* 13. Scroll horizontal (effet faux) */}
//         <div className="overflow-x-auto whitespace-nowrap">
//           <Parallax speed={-10}>
//             <div className="inline-block w-[200vw] bg-gradient-to-r from-blue-300 to-green-300 p-10">
//               Scroll horizontal parallax simulé
//             </div>
//           </Parallax>
//         </div>

//         {/* 14. Bloc qui remonte */}
//         <Parallax translateY={['100px', '0px']}>
//           <div className="text-2xl text-center">Bloc qui remonte</div>
//         </Parallax>

//         {/* 15. Grille animée */}
//         <Parallax speed={-20}>
//           <div className="grid grid-cols-3 gap-4 px-10">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="p-6 bg-white rounded shadow">Carte {i + 1}</div>
//             ))}
//           </div>
//         </Parallax>

//         {/* 16. Effet diagonal */}
//         <Parallax translateX={['-100px', '100px']}> 
//           <h2 className="text-3xl text-center text-indigo-700">Déplacement diagonal</h2>
//         </Parallax>

//         {/* 17. Texte géant en arrière */}
//         <Parallax speed={-30}>
//           <h1 className="text-[10rem] text-gray-200 text-center">GRAND TEXTE</h1>
//         </Parallax>

//         {/* 18. Icône ou logo qui tourne */}
//         <Parallax rotate={[0, 360]}>
//           <div className="text-6xl text-center">⚙️</div>
//         </Parallax>

//         {/* 19. Image de produit qui flotte */}
//         <Parallax translateY={['-50px', '50px']}>
//           <img src="https://picsum.photos/id/1040/400/400" className="mx-auto rounded-lg" />
//         </Parallax>

//         {/* 20. Bouton flottant */}
//         <Parallax speed={-5}>
//           <div className="text-center">
//             <button className="px-6 py-3 text-white bg-black rounded-full shadow-lg hover:bg-gray-800">Me contacter</button>
//           </div>
//         </Parallax>
//       </div>
//     </ParallaxProvider>
//   );
// }
