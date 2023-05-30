import React from 'react'
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className='container pt-20 flex flex-col text-6xl items-center justify-center mx-auto'>
            <h1 className='p-2 text-center'>
                WHICH
            </h1>
            <h1 className='p-2 text-center'>
                <span className='text-orange'>FOOD MOOD </span>
            </h1>
            <h1 className='p-2 text-center'>
                ARE YOU IN?
            </h1>
            <Link to='/chefbot'>
                <button className="text-xl inline-flex items-center bg-orange border-0 p-3 focus:outline-none hover:bg-lightOrange rounded text-white m-8">Find your next meal -{'>'}
                </button>
            </Link>
        </div>
    )
}
