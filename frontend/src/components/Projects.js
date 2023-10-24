import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getProjects } from '../services/ProjectService';
import "../App.css";

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
    <div className="row side-row" >
     <p id="before-table"></p>
         <Table striped bordered hover className="react-bootstrap-table"
         id="dataTable">
         <thead>
             <tr>
             <th>ID</th>
             <th>Title</th>
             <th>Description</th>
             <th>Technology</th>
             <th>Image</th>
             </tr>
         </thead>
         <tbody>
             {projects.map((stu) =>
             <tr key={stu.id}>
                 <td>{stu.id}</td>
                 <td>{stu.title}</td>
                 <td>{stu.description}</td>
                 <td>{stu.technology}</td>
                 <td>{stu.image}</td>
             </tr>)}
         </tbody>
     </Table>
     </div>
   </div>
   );
 };

 export default Projects;
