import React, { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Credit = () => {
  const heroGameRef = useRef(null);

  useLayoutEffect(() => {
    const homeNavHeight = document.querySelector('.home__nav').offsetHeight;
    const heroHeaderHeight = document.querySelector('.hero__header').offsetHeight;
    const footerHeight = document.querySelector('#js_footer.home__footer').offsetHeight;
    const heroGameElement = heroGameRef.current;

    if (heroGameElement) {
      const availableHeight = window.innerHeight - homeNavHeight - heroHeaderHeight - footerHeight;
      heroGameElement.style.minHeight = `${availableHeight-50}px`;
      console.log("avail height:" + availableHeight);
    }
  }, [])

  return (
    <div className="home__hero">
      <section className="hero__header">
          <span className='link'>Special</span>
          <span className='link'>Thanks</span>
        </section>
        <section className='hero__game' ref={heroGameRef}>
          <h1 href="https://www.seyi.dev/">Oluwadare Oluwaseyi [Stylistic Inspiration + Code]</h1>
          <h1 href="https://www.fayemi.design/">Isaac Fayemi [Stylistic Inspiration]</h1>
          <h1 href="https://github.com/Domenicobrz/R3F-in-practice/tree/main/car-physics/public/models">Domenicobrz [Initial Race Game Scene]</h1>

        </section>
    </div>
  );
};

export default Credit;
