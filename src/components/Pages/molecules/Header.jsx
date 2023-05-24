import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../container/actions';

export default function Header() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.isLoggedIn);
    const logout = () => {
        dispatch(logoutAction());
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
                <Link to="/chefbot" className="text-orange hover:text-lightOrange">
                    <img width="45" height="45" src="images/chat.png" alt="filled-chat"/>
                </Link>
                <Link to="#" className="hover:text-gray-600">Help</Link>
                <Link to="/login" className="inline-flex items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-lightOrange rounded text-white">Login</Link>
                {user ? <Logout onLogout={logout}></Logout> : ""}
            </nav>
        </header >
    )
}
