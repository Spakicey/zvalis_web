import React, { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Info = () => {
  const heroGameRef = useRef(null);
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState("");

  const handleLinkClick = (direction) => {
    setAnimationClass(`slide-out ${direction}`);
    setTimeout(() => {
      navigate(direction === "right" ? "/" : "/projects");
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
      console.log("avail height:" + availableHeight);
    }
  }, [])

  return (
    <div className={`home__hero ${animationClass} ${!animationClass ? "slide-in" : ""}`}>
      <section className="hero__header">
          <span className='link right' onClick={() => handleLinkClick("left")}>Work</span>
          <span className='link left' onClick={() => handleLinkClick("right")}>Home</span>
        </section>
        <section className='hero__game' ref={heroGameRef}>
        </section>
    </div>
  );
};

export default Info;
