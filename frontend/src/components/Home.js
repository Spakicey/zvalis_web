// Home.js
import { useRef, useEffect, useState } from 'react';
import Yokoland from '../services/yokoland';

const Home = () => {
  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0});

  useEffect(() => {
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
        <Yokoland containerDimensions={containerDimensions}/>
      </section>
    </div>
  );
};

export default Home;
