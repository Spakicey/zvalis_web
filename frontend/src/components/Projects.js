import { Link, useNavigate } from 'react-router-dom';
import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getProjects } from '../services/ProjectService';
import "../scss/App.scss";

const Projects = () => {
  const heroGameRef = useRef(null);
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState("");
  const handleLinkClick = (direction) => {
    setAnimationClass(`slide-out ${direction}`);
    setTimeout(() => {
      navigate(direction === "left" ? "/" : "/info");
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


  let img_partial = "http://127.0.0.1:8000";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;
    getProjects()
      .then(data => {
        if(mounted) {
          setProjects(data)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className={`home__hero ${animationClass} ${!animationClass ? "slide-in" : ""}`}>
    <section className="hero__header">
        <span className='link left' onClick={() => handleLinkClick("left")}>Home</span>
        <span className='link left' onClick={() => handleLinkClick("right")}>Info</span>
      </section>
      <section className='hero__game' ref={heroGameRef}>
        <div className="container-fluid side-container">
          <div className="row side-row">
            {projects.map((stu) =>
            <div key={ stu.id } className="col-md-4">
              <div className="card mb-2">
                <img className="card-img-top" src={img_partial.concat(stu.image)}
                  onClick={() => {navigate(`/details/${stu.id}`, { state: stu }) }} alt="Project Image"/>
                <div className="card-body">
                  <h5 className="card-title">{stu.title}</h5>
                  <p className="card-text">{stu.description}</p>
                  <p>{img_partial.concat(stu.image)}</p>
                  <Button variant="primary" onClick={() => {navigate(`/details/${stu.id}`, { state: stu }) }}>Read More</Button>{' '}
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </section>
  </div>
   );
 };

 export default Projects;
