import React from 'react'
// import anime from 'animejs/lib/anime.es.js';
import '../../../assets/css/slider.css'

export default function Slider() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
        return images;
    }
    function calcDistance(pos) {

    }
    console.log(window.screen.width);
    const images = importAll(require.context('../../../assets/img/', false, /\.jpeg$/));
    /* anime({
        targets: '',
        translateX: 1440,
        duration: 4000,
        loop: true,
        easing: 'linear',
        autoplay: true,
    });
    */
    return (
        <div id='slider' className='flex flex-row justify-evenly mt-8 mb-12'>
            {Object.keys(images).map((key) =>
                <img className='dish rounded-full h-32 w-32' src={images[key]} alt={key} />
            )}
        </div>
    )
}
