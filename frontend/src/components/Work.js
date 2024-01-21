// Work.js
//import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { getProjects, getPath } from '../services/ProjectService';
import { projectData } from '../data/projects';
//let img_partial = getPath();

const Work = () => {
  const navigate = useNavigate();
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
          <div className='project' key={ stu.id } style={{visibility: stu.visible}}>
            <div className='card'>
              <img className="image" src={stu.image}
              onClick={() => {navigate(`/details/${stu.id}`, { state: stu }) }} alt="ZCV/2K24"/>
              <div className="body">
                <h2 className="title">{stu.name}</h2>
                <p className="text">{stu.summary}</p>
                <span className="c-button">
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
