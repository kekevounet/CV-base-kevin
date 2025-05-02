import me_info from '../../Assets/me_info.png'
function Footer () {
  return (
    <>
      <footer className='grid w-full h-auto grid-cols-3 gap-2 text-sm text-white border-t lg:text-base bg-stone-900 bg-opacity-90'>
        <div className='flex items-center justify-center w-full h-full col-span-3 sm:col-span-1'>
          <div className='mx-6 my-3 text-center'>Je suis actuellement à la recherche d'un stage ou d'une
              opportunité d'embauche pour développer d’avantage mes compétences
              techniques, tout en apportant mon expertise dans un environnement
              dynamique. <br /> Contactez si vous avez besoin de moi.</div>
        </div>
        <div className='flex items-center justify-center w-full h-full col-span-3 sm:col-span-1'>
          <ul>
            <a href='#Accueil' className='text-white no-underline transition-all' title='Accueil'>
              <li className='p-1'>
                <span className='mr-3'>
                  <i className='p-1 rounded-full fas fa-house-user'></i>
                </span>
                Accueil
              </li>
            </a>
            <a href='#Compétences' className='text-white no-underline transition-all' title='Compétences'>
              <li className='p-1'>
                <span className='mr-3'>
                  <i className='p-1 rounded-full fas fa-list-check'></i>
                </span>
                Compétences
              </li>
            </a>
            <a href='#Expériences' className='text-white no-underline transition-all' title='Expériences'>
              <li className='p-1'>
                <span className='mr-3'>
                  <i className='p-1 rounded-full fas fa-briefcase'></i>
                </span>
                Expériences
              </li>
            </a>
            <a href='#Projets' className='text-white no-underline transition-all' title='Projets'>
              <li className='p-1'>
                <span className='mr-3'>
                  <i className='p-1 rounded-full fas fa-code'></i>
                </span>
                Projets
              </li>
            </a>
            <a href='mailto:niavo.kevin9@gmail.com' target='_blank' rel='noopener noreferrer' className='text-white no-underline transition-all' title='niavo.kevin9@gmail.com'>
              <li className='p-1'>
                <span className='mr-3'>
                  <i className='p-1 rounded-full fas fa-envelope'></i>
                </span>
                Contactez-moi
              </li>
            </a>
          </ul>
        </div>
        <div className='flex items-center justify-center w-full h-full col-span-3 sm:col-span-1'>
          <a rel='noopener noreferrer' href='mailto:niavo.kevin9@gmail.com'><img src={me_info} alt='me_info' className='w-48 h-52 scale-[0.8]' title='Scanner-moi!!' /></a>
        </div>
      </footer>
        <footer className='flex items-center justify-center w-full h-auto gap-2 p-3 text-base text-white border-t bg-stone-900 bg-opacity-90'>
          &copy; 2025 Still Development. Tous droits réservés.
        </footer>
    </>
  )
}
export default Footer
