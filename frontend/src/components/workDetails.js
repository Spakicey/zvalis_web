import { useLocation, Link } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  let img_partial = "http://127.0.0.1:8000";

  return (
    <div className="hero">
      <section className="container">
        <div className="detail">
          <h1 className="title">{ location.state.title }</h1>
          <img className="image" src={img_partial.concat(location.state.image)} width="100%"/>
          <div className="body">
            <h2>About the project:</h2>
            <p>{ location.state.description }</p>
            <br/>
            <h2>Technology used:</h2>
            <p>{ location.state.technology }</p>
            <p className="c-button">
              <span className="c-link">
                <span className="c-link__inner">
                  <span>
                    <Link to ="/work">GO BACK</Link>
                  </span>
                  <span className="c-link__animated">
                    <Link to ="/work">GO BACK</Link>
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
