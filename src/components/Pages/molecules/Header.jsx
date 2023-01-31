import React from 'react'
import { Link } from 'react-router-dom';
import KitchenIcon from '@mui/icons-material/Kitchen';

export default function Header() {
    return (
        <header className="body-font font-black" style={{
            height: '12vh'
        }}>
            <nav className="container mx-auto flex text-center flex-row justify-around p-5 md:flex-row items-center">
                <Link to="/" className="flex items-center text-gray-900">
                    <img className="w-32" src={require('../../../assets/img/logo.png')} alt="logo" />
                </Link>
                <Link to="/" className="hover:text-gray-600">Home</Link>
                <Link to="#" className="text-orange hover:text-lightOrange">
                    <KitchenIcon fontSize="large" />
                </Link>
                <Link to="#" className="hover:text-gray-600">Help</Link>
                <button className="inline-flex items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-lightOrange rounded text-white">My Account
                </button>
            </nav>
        </header >
    )
}
