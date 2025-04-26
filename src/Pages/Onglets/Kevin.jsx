import { Link } from 'react-router-dom';
import exp from '../../Assets/exp.JPG';
function Kevin(){
    return(
        <div className="w-full h-screen bg-slate-900 text-white flex justify-center items-center">
            <img src={exp} alt="exp" className='' />
            <Link to='/' className='absolute left-10 top-10 animate-pulse' title='Quitter'><i className="fas fa-arrow-left-long text-5xl text-white"></i></Link>
        </div>
    );
}
export default Kevin;