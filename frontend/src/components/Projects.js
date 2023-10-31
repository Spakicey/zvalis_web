import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { getProjects } from '../services/ProjectService';
import "../App.scss";

let img_partial = "http://127.0.0.1:8000";
const Projects = () => {
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
              <Button variant="primary" onClick={() => {navigate(`/details/${stu.id}`, { state: stu }) }}>Read More</Button>{' '}
            </div>
          </div>
        </div>)}
      </div>
    </div>
   );
 };

 export default Projects;
