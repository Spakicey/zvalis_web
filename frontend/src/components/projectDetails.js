import { useLocation, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Details = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <div>
          <strong>id:</strong> {location.state.id}{" "}
        </div>
        <div>
          <strong>Title:</strong> {location.state.title}{" "}
        </div>
      </div>
      <Link to ="/projects"><Button variant="primary">Back to Projects</Button></Link>
    </div>
  );
};

export default Details;
