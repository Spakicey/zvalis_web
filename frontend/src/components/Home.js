// Home.js
import { useRef, useEffect, useState } from 'react';
import Yokoland from '../services/yokoland';
import { setHeroSize } from '../services/heroSizeService';

const Home = () => {
  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0});

  useEffect(() => {
    setHeroSize();

    const updateContainerDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        setContainerDimensions({ width, height });
      }
    };

    updateContainerDimensions();
    window.addEventListener('resize', updateContainerDimensions);

    return () => {
      window.removeEventListener('resize', updateContainerDimensions);
    };
  }, []);

  return (
    <div className='hero'>
      <section className='container' ref={containerRef}>
        <div className='home'>
          <h1 className='text'>CLICK TO DRAW IMAGES</h1>
        </div>
        <Yokoland containerDimensions={containerDimensions} />
      </section>
    </div>
  );
};

export default Home;
