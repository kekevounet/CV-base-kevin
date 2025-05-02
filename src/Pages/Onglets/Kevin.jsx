import { Link } from 'react-router-dom';
import Moi from '../../Assets/Niavo-Kevin.jpg';
import { useEffect, useState } from 'react';
function Kevin(){
      const [Chargement, setChargement] = useState(true);
    
     useEffect(() => {
        
        setTimeout(() => {
          setChargement(false);
        }, 3000);
      }, []);
    
      if (Chargement) {
        return (
          <div className="flex items-center justify-center h-screen bg-stone-600">
            <div className="w-32 h-32 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
          </div>
        );
    }
    return(
        <div className="flex items-center justify-center w-full h-screen text-white cv">
            <img src={Moi} alt="exp" className='lg:h-full lg:w-auto' />
            <Link to='/' className='absolute left-5 top-5 animate-pulse' title='Quitter'><i className="text-5xl text-slate-700 fas fa-arrow-left-long lg:text-white"></i></Link>
            <a href='mailto:niavo.kevin9@gmail.com' target='_blank' rel='noopener noreferrer' className='absolute right-5 top-5 animate-bounce' title='Contactez'><i className="text-5xl text-slate-700 lg:text-white fas fa-envelope"></i></a>
        </div>
    );
}
export default Kevin;