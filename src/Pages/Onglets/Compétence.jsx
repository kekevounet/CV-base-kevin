import { AiTwotoneCheckCircle } from "react-icons/ai"; 
import { TbBrandOffice,TbBrandVscode,TbBrandDjango } from "react-icons/tb"; 
import { GrMysql } from "react-icons/gr"; 
import { DiGit } from "react-icons/di"; 
import { TbBrandReactNative } from "react-icons/tb"; 
import { SiTailwindcss } from "react-icons/si"; 
import { ImHtmlFive } from "react-icons/im"; 
import { FaCss3Alt, FaLaravel,FaReact,FaPython,FaBootstrap } from "react-icons/fa"; 
import { GrNode } from "react-icons/gr"; 
import { motion } from 'framer-motion';
import exp from '../../Assets/Full.JPG';

function Competences ({NavBarOuvert}) {
  return (
    <div
      className={`haha flex items-center justify-center w-full h-full text-sm text-white lg:h-screen lg:text-base ${NavBarOuvert ? 'blur-sm lg:blur-none' : '' } `}
      id='Compétences'
      title='Compétences ++'
    >
      <div className='flex flex-col w-full mx-2 mt-20 rounded-lg h-[60%] lg:mx-5 lg:flex-row lg:justify-between'>
        {/* eto daolo ny compétences */}
        <motion.div
          className='w-full h-[100%] p-2 rounded-lg bg-stone-900 bg-opacity-90 lg:h-full lg:p-5 lg:mr-10 lg:w-1/2 lg:ml-36 border-b'
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='p-3 text-xl font-bold text-center border-b'>
            Compétences
          </div>

          <div className='grid h-[90%] mt-3 grid-cols-2 gap-3'>
            <div className='w-full h-full p-3 border-b'>
              <div className='p-2 text-center underline underline-offset-4'>
                Développement web
              </div>
              <div className='mt-3'>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><FaReact className="mr-3 text-xl"/>Javascript / React JS</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><GrNode className="mr-3 text-xl" />Node JS / Express JS</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><TbBrandDjango className="mr-3 text-xl"/>Python / Django</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><FaLaravel className="mr-3 text-xl"/>PHP / Laravel ( Base )</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><ImHtmlFive className="mr-1 text-xl"/> / <FaCss3Alt className="ml-1 mr-3 text-xl"/>HTML / CSS</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><SiTailwindcss className="mr-3 text-xl"/>Tailwindcss</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><FaBootstrap className="mr-3 text-xl"/>Bootstrap</li>
              </div>
            </div>

            <div className='w-full h-full p-3 border-b'>
              <div className='p-2 text-center underline underline-offset-4'>
                Développement logiciel
              </div>
              <div className='mt-3'>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'>
                  <TbBrandReactNative className="mr-3 text-xl"/>Javascript / React native ( Base )
                </li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><FaPython className="mr-3 text-xl"/>Python / Tkinter ( En cours )</li>
              </div>
            </div>

            <div className='w-full h-full p-3'>
              <div className='p-2 text-center underline underline-offset-4'>
                Autres
              </div>
              <div className='mt-3'>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><DiGit className="mr-3 text-xl"/>Git / GitHub</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><GrMysql className="mr-3 text-xl"/>SGBD / Mysql</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><TbBrandOffice className="mr-3 text-xl"/>MS Office</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><TbBrandVscode className="mr-3 text-xl"/>VS Code</li>
              </div>
            </div>

            <div className='w-full h-full p-3'>
              <div className='p-2 text-center underline underline-offset-4'>
                Soft skills
              </div>
              <div className='mt-3'>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><AiTwotoneCheckCircle className="mr-3 text-xl"/>Positif</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><AiTwotoneCheckCircle className="mr-3 text-xl"/>Rigoureux</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><AiTwotoneCheckCircle className="mr-3 text-xl"/>Esprit d'équipe</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><AiTwotoneCheckCircle className="mr-3 text-xl"/>Curieux</li>
                <li className='flex items-center list-none cursor-pointer hover:text-gray-300'><AiTwotoneCheckCircle className="mr-3 text-xl"/>Capacité d'adaptation</li>
              </div>
            </div>
          </div>
        </motion.div>

        {/* eto le sary exp iny */}
        <div className='flex justify-center w-full p-2 mt-10 text-center rounded-lg lg:mt-0 h-1/2 lg:h-full lg:p-5 lg:ml-10 lg:w-1/2 lg:scale-[0.9]'>
          <motion.img
            src={exp}
            alt='exp'
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay:0.5}}
            className='rounded-lg'
          >
          </motion.img>
        </div>
      </div>
    </div>
  )
}
export default Competences;
