import React from 'react';
import Header from './molecules/Header';
import Footer from './molecules/Footer';
import Hero from './molecules/Hero';
import Slider from './molecules/Slider';
import Description from './molecules/Description';

export default function Home() {
    return (
        <div id="bg" className='bg-eggshell'>
            <Header />
            <main id="site-main">
                <Hero />
                {/* <Slider /> */}
                <Description />
            </main>
            <Footer />
        </div>
    )
}
