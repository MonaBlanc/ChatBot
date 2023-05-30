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
                <div class="max-w-screen-xl flex items-center justify-evenly mx-auto p-4">
                    <Link to="/" className="flex items-center text-gray-900">
                        <img className="w-32" src={require('../../../assets/img/logo.png')} alt="logo" />
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul>
                    <Link to="/" className="hover:text-gray-600">Home</Link>
                    <a href="/chefbot" className="text-orange hover:text-lightOrange">
                        <img width="45" height="45" src="images/chat.png" alt="filled-chat"/>
                    </a>
                    <Link to="#" className="hover:text-gray-600">Help</Link>
                    <Link to="/login" className="inline-flex items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-lightOrange rounded text-white">Login</Link>
                    {user ? <Logout onLogout={logout}></Logout> : ""}
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}
