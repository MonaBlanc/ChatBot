import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../../../assets/css/slider.css';
import chickenBasquaise from '../../../assets/img/chicken-basquaise.jpeg';
import chomeur from '../../../assets/img/chomeur-pouding.jpeg';
import onionSoup from '../../../assets/img/french-onionsoup.jpeg';
import hamEggs from '../../../assets/img/hameggs.jpeg';
import penneArrabiata from '../../../assets/img/penne-arrabiata.jpeg';
import spaghettiBolo from '../../../assets/img/spaghetti-bolo.jpeg';
import spaghettiCarbo from '../../../assets/img/spaghetti-carbonara.jpeg';

const IMAGES = [
    chickenBasquaise,
    chomeur,
    onionSoup,
    hamEggs,
    penneArrabiata,
    spaghettiBolo,
    spaghettiCarbo
  ];
  const DURATION = 30000;
  const ROWS = 1;
  const IMAGES_PER_ROW = 7;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};


export default function Slider() {
  const sliderRef = useRef(null);

  useEffect(() => {


    anime({
      targets: sliderRef.current,
      translateX: 1440,
      duration: 4000,
      loop: true,
      easing: 'linear',
      autoplay: true
    });
  }, []);

  return (
    <div data-testid="slider" className='tag-list flex flex-row justify-evenly mt-8 mb-12 overflow-hidden' id='slider'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(IMAGES).slice(0, IMAGES_PER_ROW).map(tag => (
        <img className='dish rounded-full h-32 w-32' key={tag} src={tag} alt={`dish-${tag}`} />
        ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>

  );
}
