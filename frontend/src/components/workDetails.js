// workDetails.js
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imgPartial = '../static/project_images/';

  return (
    <div className="hero">
      <section className="container">
        <div className="detail">
          <h1 className="title">{ location.state.name }</h1>
          <img className="image" src={ imgPartial+ location.state.image } alt="ZCV/2K24"/>
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
                  <span onClick={() => navigate(-1)}>
                    GO BACK
                  </span>
                  <span className="c-link__animated">
                    <span onClick={() => navigate(-1)}>
                      GO BACK
                    </span>
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
