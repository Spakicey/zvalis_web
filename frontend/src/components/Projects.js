import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { getProjects } from '../services/ProjectService';
import "../App.css";

let img_partial = "http://127.0.0.1:8000";
const Projects = () => {
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
        <div class="col-md-4">
          <div class="card mb-2">
          <Link to="">
            <img class="card-img-top" src={img_partial.concat(stu.image)}></img>
          </Link>
            <div class="card-body">
              <h5 class="card-title">{stu.title}</h5>
              <p class="card-text">{stu.description}</p>
              <a href=""
                class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>)}
      </div>
    </div>
   );
 };

 export default Projects;
