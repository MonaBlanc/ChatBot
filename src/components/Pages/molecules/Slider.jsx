import anime from 'animejs/lib/anime.es.js';
import '../../../assets/css/slider.css';
import chickenBasquaise from '../../../assets/img/chicken-basquaise.jpeg';
import chomeur from '../../../assets/img/chomeur-pouding.jpeg';
import onionSoup from '../../../assets/img/french-onionsoup.jpeg';
import hamEggs from '../../../assets/img/hameggs.jpeg';
import penneArrabiata from '../../../assets/img/penne-arrabiata.jpeg';
import spaghettiBolo from '../../../assets/img/spaghetti-bolo.jpeg';
import spaghettiCarbo from '../../../assets/img/spaghetti-carbonara.jpeg';

export default function Slider() {
    // function importAll(r) {
    //     let images = {};
    //     r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
    //     return images;
    // }
    // const images = importAll(require.context('../../../assets/img/', false, /\.jpeg$/));
    const images = [chickenBasquaise, chomeur, onionSoup, hamEggs, penneArrabiata, spaghettiBolo, spaghettiCarbo ];
    anime({
        targets: '',
        translateX: 1440,
        duration: 4000,
        loop: true,
        easing: 'linear',
        autoplay: true,
    });
    return (
        <div data-testid="slider" id='slider' className='flex flex-row justify-evenly mt-8 mb-12 overflow-hidden'>
            {Object.keys(images).map((key) =>
                <img className='dish rounded-full h-32 w-32' src={images[key]} key={key} alt={key} />
            )}
        </div>
    )
}
