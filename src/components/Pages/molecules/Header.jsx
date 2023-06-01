import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../../container/actions';
import Logout from './Logout';
export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.isLoggedIn);
  const logout = () => {
    dispatch(logoutAction());
  }

  return (
    <header className="body-font font-black" style={{ height: '10vh' }}>
      <nav className="container flex items-center justify-between p-5 md:flex-row">
          <Link to="/" className="flex items-center text-gray-900">
            <img className="w-32" src={require('../../../assets/img/logo.png')} alt="logo" />
          </Link>
        <div className="max-w-screen-xl flex items-center justify-between p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-orange-500 rounded-lg md:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:text-orange-400 dark:hover:bg-orange-700 dark:focus:ring-orange-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:flex md:w-auto justify-end" id="navbar-default">
            <ul className="flex items-center space-x-4">
              <li>
                <a href="/chefbot" className="text-orange hover:text-lightOrange align-middle justify-center">
                  <img width="40" height="40" src="images/NewChat.png" alt="filled-chat" />
                </a>
              </li>
              <li>
                <Link to="#" className="text-orange hover:text-lightOrange">
                    <img width="45" height="45" src="images/Question.png" alt="filled-chat" /> 
                </Link>
              </li>
              {user ? <Logout onLogout={logout}></Logout> : null}
              <li>
                <Link
                  to="/login"
                  className="inline-flex items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-lightOrange rounded text-white"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
