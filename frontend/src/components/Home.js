// Home.js
import Yokoland from '../services/yokoland';
import DrawingCanvas from '../services/DrawingCanvas';

const Home = () => {

  return (
    <div className='hero'>
      <section className="container">
        <Yokoland />
      </section>
    </div>
  );
};

export default Home;
