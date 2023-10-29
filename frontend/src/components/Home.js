import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  const img_partial = "http://127.0.0.1:8000";
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Olivia Jones | Portfolio</title>
      </head>
      <body>
        <main>
          <section className="fragment fragment-one">
            <div className="headers">
                <h1> olivia jones </h1>
                <h3> web developer | ui designer | nodejs evangelist</h3>
            </div>
            <div className="learn">
                <p> learn more </p>
                <i className="fas fa-chevron-down"></i>
            </div>
          </section>

          <section className="fragment fragment-two">
            <h2> Seeking New <br />Opportunities </h2>
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <h5>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sem luctus,
                      feugiat
                      libero id,
                      lacinia ipsum.
                  </h5>
                </div>
              </div>
            </div>
            <div className="learn">
              <p> see why you should hire me </p>
              <i className="fas fa-chevron-down"></i>
            </div>
          </section>

          <section className="fragment fragment-three">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
              <img className="card-img-top" src={img_partial.concat("/uploads/images/CIMG0861.JPG")} alt="Project Image"/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className="card-img-top" src={img_partial.concat("/uploads/images/CIMG0884.JPG")} alt="Project Image"/>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className="card-img-top" src={img_partial.concat("/uploads/images/CIMG0912.JPG")} alt="Project Image"/>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>

          <section className="fragment fragment-four">
            <h3>Technology I Use</h3>
            <hr className="title-underline"/>
            <div className="container">
              <div className="labels">
                <div className="tech">CSS3</div>
                <div className="tech">HTML5</div>
                <div className="tech">JavaScript</div>
                <div className="tech">Git</div>
                <div className="tech">NodeJS</div>
              </div>
            </div>
          </section>

          <section className="fragment fragment-five">
            <h3>My Education</h3>
            <hr className="title-underline"/>
            <div className="container">
              <h5> Harvard University</h5>
              <p className="credential"> Full-stack Coding Bootcamp | 2019</p>
              <h5> The University of Utah</h5>
              <p className="credential"> B.A. Political Science | 2010 - 2014</p>
            </div>
          </section>
        </main>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"></script>
      </body>
    </div>
  );
};

export default Home;
