import React, { useLayoutEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './threejs/Scene';
import Cube from './threejs/Cube';

const Home = () => {
  const heroGameRef = useRef(null);

  useLayoutEffect(() => {
    const homeNavHeight = document.querySelector('.home__nav').offsetHeight;
    const heroHeaderHeight = document.querySelector('.hero__header').offsetHeight;
    const footerHeight = document.querySelector('#js_footer.home__footer').offsetHeight;
    const heroGameElement = heroGameRef.current;

    if (heroGameElement) {
      const availableHeight = window.innerHeight - homeNavHeight - heroHeaderHeight - footerHeight;
      heroGameElement.style.minHeight = `${availableHeight}px`;
      console.log("avail height:" + availableHeight);
    }
  }, []);

  return (
    <div className="home__hero">
      <section className="hero__header">
          <a
            className="link"
            href=""
            rel="noopener noreferrer">
            <span className="left">Info</span>
          </a>
          <a
            className="link"
            href=""
            rel="noopener noreferrer">
            <span className="right">Work</span>
          </a>
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
