import React, { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import { Scene } from './threejs/Scene';
import Cube from './threejs/Cube';

const Home = () => {
  const heroGameRef = useRef(null);
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState("");

  const handleLinkClick = (direction) => {
    setAnimationClass(`slide-out ${direction}`);
    setTimeout(() => {
      navigate(direction === "right" ? "/projects" : "/info");
      setAnimationClass(""); // Reset animation class after navigation
    }, 500); // Adjust the timeout value based on your transition duration
  };

  useLayoutEffect(() => {
    const homeNavHeight = document.querySelector('.home__nav').offsetHeight;
    const heroHeaderHeight = document.querySelector('.hero__header').offsetHeight;
    const footerHeight = document.querySelector('#js_footer.home__footer').offsetHeight;
    const heroGameElement = heroGameRef.current;

    if (heroGameElement) {
      const availableHeight = window.innerHeight - homeNavHeight - heroHeaderHeight - footerHeight;
      heroGameElement.style.minHeight = `${availableHeight-50}px`;
    }
  }, [])

  return (
    <div className={`home__hero ${animationClass} ${!animationClass ? "slide-in" : ""}`}>
      <section className="hero__header">
          <span className='link left' onClick={() => handleLinkClick("left")}>Info</span>
          <span className='link right' onClick={() => handleLinkClick("right")}>Work</span>
        </section>
        <section className='hero__game' ref={heroGameRef}>
          <Canvas>
            {/*<Cube position={[-1.2, 0, 0]} />*/}
            <Scene />
          </Canvas>
        </section>
    </div>
  );
};

export default Home;
