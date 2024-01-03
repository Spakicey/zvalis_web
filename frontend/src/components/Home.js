// Home.js
//import ImagePlacer from "../services/ImageAddService";
import DrawingCanvas from "../services/DrawingCanvas";
//import GifFrameLoader from "../services/GifSplitter";
import img3 from '../static/fire.gif';
import img4 from '../static/fire2.gif';
import img1 from '../static/redline.gif';

const Home = () => {


  return (
    <div className='hero'>
      <DrawingCanvas/>
    </div>
  );
};

export default Home;
