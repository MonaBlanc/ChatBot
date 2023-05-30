import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../container/actions';
import { useCallback, useEffect, useState } from 'react';

export default function Header() {
    const [isLogged, setIsLogged] = useState(false);
    const route = useCallback(() => {
        const token = localStorage.getItem('x-access-token');
        return token ? true : false;
    }, []);
    useEffect(() => {
        setIsLogged(route);
    }, [route]);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutAction());
        setIsLogged(false);
    }
    
    return (
        <header className="body-font font-black" style={{
            height: '12vh'
        }}>
            <nav className="container mx-auto flex text-center flex-row justify-around p-5 md:flex-row items-center">
                <Link to="/" className="flex items-center text-gray-900">
                    <img className="w-32" src={require('../../../assets/img/logo.png')} alt="logo" />
                </Link>
                <Link to="/" className="hover:text-gray-600">Home</Link>
                <a href="/chefbot" className="text-orange hover:text-lightOrange">
                    <img width="45" height="45" src="images/chat.png" alt="filled-chat"/>
                </a>
                <Link to="#" className="hover:text-gray-600">Help</Link>
                
                {isLogged ? 
                <Link onClick={logout} className="inline-flex items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-lightOrange rounded text-white">Logout</Link>
                : <Link to="/login" className="inline-flex items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-lightOrange rounded text-white">Login</Link>}
            </nav>
        </header >
    )
}
