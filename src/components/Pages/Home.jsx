import React from 'react';
import Header from './molecules/Header';
import Hero from './molecules/Hero';
import Slider from './molecules/Slider';

export default function Home() {
    return (
        <div id="bg" className='bg-eggshell'>
            <Header />
            <main id="site-main">
                <Hero />
                <Slider />
            </main>
        </div>
    )
}
