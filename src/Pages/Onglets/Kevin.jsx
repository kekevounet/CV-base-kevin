import { Link } from 'react-router-dom';
import Moi from '../../Assets/Niavo-Kevin.jpg';
function Kevin(){
    return(
        <div className="flex items-center justify-center w-full h-screen text-white bg-slate-900">
            <img src={Moi} alt="exp" className='lg:h-full lg:w-auto' />
            <Link to='/' className='absolute left-5 top-5 animate-pulse' title='Quitter'><i className="text-5xl text-white fas fa-arrow-left-long"></i></Link>
            <a href='niavo.kevin9@gmail.com' target='_blank' rel='noopener noreferrer' className='absolute right-5 top-5 animate-bounce' title='Contactez'><i className="text-5xl text-white fas fa-envelope"></i></a>
        </div>
    );
}
export default Kevin;