import { useLocation, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Details = () => {
  const location = useLocation();
  let img_partial = "http://127.0.0.1:8000";

  return (
    <div class="row">
      <h1>{ location.state.title }</h1>
      <div class="col-md-8">
        <img src={img_partial.concat(location.state.image)} width="100%"/>
      </div>
      <div class="col-md-4">
        <h5>About the project:</h5>
        <p>{ location.state.description }</p>
        <br/>
        <h5>Technology used:</h5>
        <p>{ location.state.technology }</p>
        <Link to ="/projects"><Button variant="primary">Back to Projects</Button></Link>
      </div>
    </div>
  );
};
export default Details;
