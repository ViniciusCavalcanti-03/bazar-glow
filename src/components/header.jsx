import UserButtons from './UserButtons';
import logo from '../assets/logo/julia-outlet.svg';
import topo from '../assets/logo/Seus-achadinhos.png'
import { useLocation,Link } from 'react-router-dom'; 

const Header = () => {
     const {pathname} = useLocation()
     const completeHeader = (   
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-white text-stone-400 px-8 py-4 items-end justify-between text-base z-10'>
            <Link to="/">

            <img className='h-16 px-2' src={logo} alt=" Logo da Bazar." />
            
            </Link>
            <UserButtons />
        </header> )

        const simpleHeader = (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-white text-stone-400 px-8 py-4 items-end justify-between text-base z-10'>
            <Link to="/">

            <img className='h-16 px-2' src={logo} alt=" Logo da Bazar." />
            </Link>
            
        </header>  )
    return <>{pathname === '/'? completeHeader : simpleHeader}</>
    
};

export default Header;  