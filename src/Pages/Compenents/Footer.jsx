import me_info from '../../Assets/me_info.png';

function Footer ({ NavBarOuvert }) {
  // Etat
  const FootLink = [
    {name:'Accueil', icon:'fa-house-user'},
    {name:'Compétences', icon:'fa-list-check'},
    {name:'Expériences', icon:'fa-briefcase'},
    {name:'Projets', icon:'fa-code'}
  ];

  // Affichage
  return (
    <>
      <footer className={`grid w-full h-auto grid-cols-3 gap-2 text-sm text-white border-t lg:text-base bg-stone-900 bg-opacity-90 ${NavBarOuvert ? 'blur-sm lg:blur-none' : '' }`}>
        <div className='flex items-center justify-center w-full h-full col-span-3 sm:col-span-1'>
          <div className='mx-6 my-3 text-center'>Je suis actuellement à la recherche d'un stage ou d'une
              opportunité d'embauche pour développer d’avantage mes compétences
              techniques, tout en apportant mon expertise dans un environnement
              dynamique. <br /> Contactez si vous avez besoin de moi.</div>
        </div>
        <div className='flex items-center justify-center w-full h-full col-span-3 sm:col-span-1'>
          <ul>
            {FootLink.map(({name,icon})=>(
              <a href={`#${name}`} className='text-white no-underline transition-all' title={`${name}`}>
              <li className='p-1'>
                <span className='mr-3'>
                  <i className={`p-1 rounded-full fa-solid ${icon}`}></i>
                </span>
                {name}
              </li>
              </a>
            ))}
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
