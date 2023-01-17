import React from 'react';
import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import Hero from '../molecules/Hero';
import Slider from '../molecules/Slider';
import AddIcon from '@mui/icons-material/Add';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';

export default function Home() {
    return (
        <div id="bg" className='bg-eggshell'>
            <Header />
            <main id="site-main">
                <Hero />
                <Slider />
                <section id="presentation" className='text-center'>
                    <h2 className='text-3xl text-orange mb-4'>ChefBot, your new Sous-chef!</h2>
                    <p>ChefBot is an intelligent chatbot that will help you find the perfect meal for your cravings!</p>
                    <p>Scroll below to see some of the cool features of ChiefBot.</p>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap w-full">
                                <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                    <div className="flex relative pb-12">
                                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <AddIcon />
                                            </svg>
                                        </div>
                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">Step 1: <span className="text-gray-700 text-md">Create your account!</span></h2>
                                            <p className="leading-relaxed">Create a new account to let Chiefbot remember your preferences!</p>
                                        </div>
                                    </div>
                                    <div className="flex relative pb-12">
                                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                                            < KitchenRoundedIcon />
                                        </div>
                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">Step 2: <span className="text-gray-700 text-md">Fill your fridge</span></h2>
                                            <p className="leading-relaxed">With the help of Chiefbot create a virtual copy of your real fridge!</p>
                                        </div>
                                    </div>
                                    <div className="flex relative pb-12">
                                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                                            <RestaurantMenuRoundedIcon />
                                        </div>
                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">Step 3: <span className="text-gray-700 text-md">Pick your poison</span></h2>
                                            <p className="leading-relaxed">Today feels more like a salad day? Or you want to go barbecue? Chiefbot will have the perfect recipe for you based on what you have in your fridge!</p>
                                        </div>
                                    </div>
                                    <div className="flex relative pb-12">
                                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                                            <LocalGroceryStoreRoundedIcon />
                                        </div>
                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">Step 4: <span className="text-gray-700 text-md">Try new things!</span></h2>
                                            <p className="leading-relaxed">If you're down to go do some groceries, Chiefbot will help you make a list of what you need to try a new meal of your taste!</p>
                                        </div>
                                    </div>
                                    <div className="flex relative">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">Last Step: <span className="text-gray-700 text-md">Bots can't cook!</span></h2>
                                            <p className="leading-relaxed">Once your next meal has been choosen, Chiefbot will stay beside you all the way along the cooking journey with tips and instructions!</p>
                                        </div>
                                    </div>
                                </div>
                                <img src={require('../../../assets/img/bot.png')} alt="bot" className="w-1/4 h-3/4 mx-auto md:mt-0 mt-12" />
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    )
}
