import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="body-font font-black">
            <nav className="container mx-auto flex text-center flex-row justify-around p-5 md:flex-row items-center">
                <Link data-testid="logo" to="/" className="flex items-center text-gray-900">
                    <span className="text-xl">Logo Chatbot</span>
                </Link>
                <Link data-testid="link1" to="/" className="hover:text-gray-600">Home</Link>
                <Link data-testid="link2" to="#" className="text-orange hover:text-lightOrange">Fridge Icon</Link>
                <Link data-testid="link3" to="#" className="hover:text-gray-600">Help</Link>
                <button className="inline-flex items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-lightOrange rounded text-white">My Account
                </button>
            </nav>
        </header>
    )
}
