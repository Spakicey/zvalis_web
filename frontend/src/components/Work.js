import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { getProjects } from '../services/ProjectService';

let img_partial = "http://127.0.0.1:8000";
const Work = () => {
  const navigate = useNavigate();
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
    <div className="hero">
      <div className="container">
        {projects.map((stu) =>
          <div className='project' key={ stu.id }>
            <div className='card'>
              <img className="image" src={img_partial.concat(stu.image)}
              onClick={() => {navigate(`/details/${stu.id}`, { state: stu }) }} alt="ZCV/2K24"/>
              <div className="body">
                <h2 className="title">{stu.title}</h2>
                <p className="text">{stu.technology}</p>
                <p className="c-button">
                  <span className="c-link">
                    <span className="c-link__inner">
                      <span>
                        <a
                          onClick={() => {navigate(`/details/${stu.id}`, { state: stu }) }}
                        >READ MORE
                        </a>
                      </span>
                      <span className="c-link__animated">
                        <a
                          onClick={() => {navigate(`/details/${stu.id}`, { state: stu }) }}
                        >READ MORE
                        </a>
                      </span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
   );
 };

 export default Work;
