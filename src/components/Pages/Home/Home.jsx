import AddIcon from '@mui/icons-material/Add';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { useEffect, useRef } from 'react';
import Footer from '../molecules/Footer';
import Header from '../molecules/Header';
import Hero from '../molecules/Hero';
import Slider from '../molecules/Slider';
import './Home.css';

export default function Home() {
  const targets = useRef([]);
  const observerRef = useRef(null); // Store the IntersectionObserver instance

  useEffect(() => {
    const observer = (observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.5 }
    ));

    const observedTargets = targets.current.filter((target) => target instanceof Element);

    observedTargets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      observedTargets.forEach((target) => {
        observer.unobserve(target); // Unobserve the element when the component unmounts
      });
    };
  }, []);

  return (
    <div id="bg" data-testid="home">
      <Header />
      <main id="site-main">
        <Hero />
        <Slider />
        <section id="presentation-container" className="text-center" ref={(el) => { targets.current[0] = el; }}>
          <h2 id="sectionTitle" ref={(el) => targets.current.push(el)}>
            ChefBot, your new Sous-chef!
          </h2>
          <p id="sectionTitle" ref={(el) => targets.current.push(el)}>
          ChefBot, your new Sous-chef! </p>
          <p id="subtitle" ref={(el) => targets.current.push(el)}>
            ChefBot is an intelligent chatbot that will help you find the perfect meal for you!
          </p>
          <p id="subtitleBis" ref={(el) => targets.current.push(el)}>
            Scroll below to see some of Chefbot's cool features.
          </p>
          <section className="text-gray-600 body-font">
            <div className="container pt-5 pl-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap w-full">
                <div className="lg:w-2/5  md:py-6">
                  <div className="flex relative pb-12" id="step1" ref={(el) => el && targets.current.push(el)}>
                    
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                      >
                        <AddIcon />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                        Step 1:{" "}
                        <span className="text-gray-700 text-md">
                          Create your account!
                        </span>
                      </h2>
                      <p className="leading-relaxed">
                        Create a new account to let Chefbot remember your
                        preferences!
                      </p>
                    </div>
                  </div>
                  <div className="flex relative pb-12" id="step2" ref={(el) => el && targets.current.push(el)}>
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                      <RestaurantMenuRoundedIcon />
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                        Step 2:{" "}
                        <span className="text-gray-700 text-md">
                          Pick your meal
                        </span>
                      </h2>
                      <p className="leading-relaxed">
                        Today feels more like a salad day? Or you want something
                        sweet? Chefbot will have the perfect recipe for you
                        based on your diet, or on what you want to eat!
                      </p>
                    </div>
                  </div>
                  <div className="flex relative pb-12" id="step3" ref={(el) => el && targets.current.push(el)}>
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                      <ShuffleIcon />
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                        Step 3:{" "}
                        <span className="text-gray-700 text-md">
                          Try new things!
                        </span>
                      </h2>
                      <p className="leading-relaxed">
                        Chefbot can suggest a random recipe for when you're hungry but don't know what to eat!
                      </p>
                    </div>
                  </div>
                  <div className="flex relative pb-12" id="step4" ref={(el) => el && targets.current.push(el)}>
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                      <LocalGroceryStoreRoundedIcon />
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                        Step 4:{" "}
                        <span className="text-gray-700 text-md">
                          Get your grocery list
                        </span>
                      </h2>
                      <p className="leading-relaxed">
                        With the help of Chefbot create a grocery list for the ingredients you need to cook your next meal!
                      </p>
                    </div>
                  </div>
                  <div className="flex relative" id="step5" ref={(el) => el && targets.current.push(el)}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                        Last Step:{" "}
                        <span className="text-gray-700 text-md">
                          Bots can't cook!
                        </span>
                      </h2>
                      <p className="leading-relaxed">
                        Once your next meal has been choosen, Chefbot will stay
                        beside you all the way along the cooking journey with
                        tips and instructions!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="botDiv">
                  <img
                    src={require("../../../assets/img/happy.png")}
                    alt="bot"
                    id="bot"
                    ref={(el) => el && targets.current.push(el)}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
