import { AiFillCheckCircle } from "react-icons/ai";
import { TbBrandVscode } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

export default function Compétences({ NavBarOuvert }) {
  const compts = [
    { titre: 'Javascript / React JS', icon: <FaReact />, desc: 'Développement d’interfaces web dynamiques et réactives avec React JS.' },
    { titre: 'Node JS / Express JS', icon: <FaNodeJs />, desc: 'Création d’API performantes et sécurisées avec Express.js.' },
    { titre: 'Python / Django', icon: <TbBrandDjango />, desc: 'Développement d’applications back-end robustes avec Django.' },
    { titre: 'PHP / Laravel ( base )', icon: <FaLaravel />, desc: 'Bases en développement PHP moderne avec Laravel.' },
    { titre: 'HTML / CSS', icon: [<AiFillHtml5 />, <FaCss3Alt />], desc: 'Mise en page soignée et responsive avec HTML5 et CSS3.' },
    { titre: 'TailwindCss', icon: <SiTailwindcss />, desc: 'Création rapide d’interfaces élégantes avec Tailwind CSS.' },
    { titre: 'Bootstrap', icon: <FaBootstrap />, desc: 'Utilisation de Bootstrap pour des designs adaptatifs et professionnels.' },
    { titre: 'Javascript / React Native ( Base )', icon: <TbBrandReactNative />, desc: 'Bases pour créer des applications mobiles avec React Native.' },
    { titre: 'Python / Tkinter ( base)', icon: <FaPython />, desc: 'Création d’interfaces graphiques simples avec Tkinter.' },
    { titre: 'Git / GitHub', icon: [<BiGitBranch />, <AiFillGithub />], desc: 'Gestion de versions et collaboration via Git et GitHub.' },
    { titre: 'SGBD / MySQL', icon: <SiMysql />, desc: 'Conception et gestion de bases de données MySQL.' },
    { titre: 'Visual Studio Code', icon: <TbBrandVscode />, desc: 'Utilisation avancée de VS Code pour le développement.' },
    { titre: 'Positif', icon: <AiFillCheckCircle />, desc: 'Attitude optimiste et orientée solutions.' },
    { titre: 'Curieux', icon: <AiFillCheckCircle />, desc: 'Toujours en quête d’apprendre de nouvelles technologies.' },
    { titre: 'Sociable', icon: <AiFillCheckCircle />, desc: 'Facilité à collaborer avec des équipes variées.' },
    { titre: 'Rigoureux', icon: <AiFillCheckCircle />, desc: 'Respect strict des délais et des bonnes pratiques.' },
    { titre: 'Esprit d\'équipe', icon: <AiFillCheckCircle />, desc: 'Capacité à travailler en synergie avec les autres.' },
    { titre: 'Capacité d\'adaptation', icon: <AiFillCheckCircle />, desc: 'Aisance face aux changements et aux nouveaux défis.' },
  ];

  return (
    <div className={`py-20 container selection:bg-stone-900 ${NavBarOuvert ? 'blur-sm lg:blur-none' : ''}`} id="Compétences">

      {/* Introduction */}
      <div className="w-full h-[25vh] from-stone-950 via-stone-800 to-stone-800 bg-gradient-to-t mb-5 flex items-center justify-center flex-col text-white">
        <h2 className="text-2xl font-bold">Mes Compétences</h2>
        <div className="text-center max-w-2xl px-4">
          Voici un aperçu de mes compétences techniques et qualités personnelles, acquises au fil de mes projets et expériences.
        </div>
      </div>

      {/* Liste des compétences */}
      <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {compts.map((compt, index) => (
          <Parallax translateY={[0, -20]} className="w-full h-[25vh] lg:h-[23vh] bg-stone-800 transition-all duration-500 cursor-pointer group text-white relative hover:scale-105" key={index} title={compt.titre} >
            <div className="w-full h-[30%] flex items-center border-b p-3 lg:p-5">
              <span className="mr-3 text-lg font-bold items-center flex space-x-3 group-hover:animate-bounce">{compt.icon}</span>
              <span className="text-xl font-bold">{compt.titre}</span>
            </div>
            <div className="w-full h-[70%] p-3 lg:p-5 flex items-center">
              {compt.desc}
            </div>
            <span className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 absolute bottom-0"></span>
            {[...Array(10)].map((_, i) => (
              <span key={i} className={`bg-stone-900 w-[10%] h-0 -z-10 absolute group-hover:h-full ${i % 2 === 0 ? 'top-0' : 'bottom-0'} left-[${i * 10}%] transition-all duration-500`}></span>
            ))}
          </Parallax>
        ))}
      </div>
    </div>
  );
}
