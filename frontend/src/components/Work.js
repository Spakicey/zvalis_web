// Work.js
//import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import projectData from '../data/projects.json';
//import { getProjects, getPath } from '../services/ProjectService';
//let img_partial = getPath();

const Work = () => {
  const navigate = useNavigate();
  const imgPartial = '../static/project_images/';
  //const [projects, setProjects] = useState([]);

  /** get projects from backend
   *   useEffect(() => {
    let mounted = true;
    getProjects()
      .then(data => {
        if(mounted) {
          setProjects(data)
        }
      })
    return () => mounted = false;
  }, [])
   */

  return(
    <div className="hero">
      <div className="container">
        {projectData.map((stu) =>
          <div className='project' key={ stu.id } style={{ visibility: stu.visible }}>
            <div className='card'>
              <img
                className="image"
                src={ imgPartial + stu.image }
                alt="ZCV/2K24"
                onClick={() => navigate(`/work/${ stu.id }`, { state: stu })}
              />
              <div className="body">
                <h2 className="title"> {stu.name }</h2>
                <p className="text">{ stu.summary }</p>
                <span className="c-button">
                  <span className="c-link">
                    <span className="c-link__inner">
                      <span onClick={() => navigate(`/work/${ stu.id }`, { state: stu })}>
                        READ MORE
                      </span>
                      <span className="c-link__animated">
                        <span onClick={() => navigate(`/work/${ stu.id }`, { state: stu })}>
                          READ MORE
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
   );
 };

 export default Work;
