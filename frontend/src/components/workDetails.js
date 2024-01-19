// workDetails.js
import { useLocation, Link } from "react-router-dom";
//import { getPath } from "../services/ProjectService";

const Details = () => {
  const location = useLocation();
  //let img_partial = getPath();


  return (
    <div className="hero">
      <section className="container">
        <div className="detail">
          <h1 className="title">{ location.state.name }</h1>
          <img className="image" src={location.state.image} width="100%"/>
          <div className="body">
            <h2>About the project:</h2>
            <p>{ location.state.description }</p>
            <h2>Technology used:</h2>
            <p>{ location.state.technology }</p>
            <h2>
              <a
                className="git-link"
                href={ location.state.repository }
                target="_blank"
                rel="noopener noreferrer"
              >GitHub Repository
              </a>
            </h2>
            { location.state.deployment !== "" &&
              <h2>
                <a
                  className="git-link"
                  href={ location.state.deployment }
                  target="_blank"
                  rel="noopener noreferrer"
                >Deployment
                </a>
              </h2>
            }
            <p className="c-button">
              <span className="c-link">
                <span className="c-link__inner">
                  <span>
                    <Link to="/work">GO BACK</Link>
                  </span>
                  <span className="c-link__animated">
                    <Link to="/work">GO BACK</Link>
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Details;
