import { motion } from 'framer-motion'
import exp from '../../Assets/Full.JPG'
function Competences () {
  return (
    <div
      className='flex items-center justify-center w-full h-full text-sm text-white lg:h-screen bg-slate-900 lg:text-base'
      id='Compétences'
      title='Compétences ++'
    >
      <div className='flex flex-col w-full mx-2 mt-20 rounded-lg h-[60%] lg:mx-5 lg:flex-row lg:justify-between'>
        {/* eto daolo ny compétences */}
        <motion.div
          className='w-full h-[100%] p-2 rounded-lg bg-slate-800 lg:h-full lg:p-5 lg:mr-10 lg:w-1/2 lg:ml-36 border-b'
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='p-3 text-xl font-bold text-center border-b'>
            Compétences
          </div>

          <div className='grid h-[90%] mt-3 grid-cols-2 gap-3'>
            <div className='w-full h-full p-3 border-b'>
              <div className='p-2 text-center underline underline-offset-8'>
                Développement web
              </div>
              <div className='mt-3'>
                <li className='list-none'>Javascript / React JS</li>
                <li className='list-none'>Node JS / Express JS</li>
                <li className='list-none'>Python / Django</li>
                <li className='list-none'>PHP / Laravel ( Base )</li>
                <li className='list-none'>HTML / CSS</li>
                <li className='list-none'>Tailwindcss</li>
                <li className='list-none'>Bootstrap</li>
              </div>
            </div>

            <div className='w-full h-full p-3 border-b'>
              <div className='p-2 text-center underline underline-offset-8'>
                Développement logiciel
              </div>
              <div className='mt-3'>
                <li className='list-none'>
                  Javascript / React native ( Base )
                </li>
                <li className='list-none'>Python / Tkinter ( En cours )</li>
              </div>
            </div>

            <div className='w-full h-full p-3'>
              <div className='p-2 text-center underline underline-offset-8'>
                Autres
              </div>
              <div className='mt-3'>
                <li className='list-none'>Git / GitHub</li>
                <li className='list-none'>SGBD / Mysql</li>
                <li className='list-none'>MS Office</li>
                <li className='list-none'>VS Code</li>
              </div>
            </div>

            <div className='w-full h-full p-3'>
              <div className='p-2 text-center underline underline-offset-8'>
                Soft skills
              </div>
              <div className='mt-3'>
                <li className='list-none'>Positif</li>
                <li className='list-none'>Rigoureux</li>
                <li className='list-none'>Esprit d'équipe</li>
                <li className='list-none'>Curieux</li>
                <li className='list-none'>Capacité d'adaptation</li>
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
            transition={{ duration: 1}}
            className='rounded-lg'
          >
          </motion.img>
        </div>
      </div>
    </div>
  )
}
export default Competences
