
const Home = () => {
  return (
      <main className="home" data-scroll-container>
        <section className="home__header">
          <a
            className="link"
            href=""
            rel="noopener noreferrer">
            <span className="left">Info</span>
          </a>
          <a
            className="link"
            href=""
            rel="noopener noreferrer">
            <span className="right">Work</span>
          </a>
        </section>

        <section className="home__hero">
          <div className="hero__title">
            <h1 className="mobile">
              Zack Valis<br />
              Freelance
            </h1>
            <h1 className="hero__title__top desktop">
              <div className="hero__title__top">
                <span className="hero__title__left">
                  <span className="hero__hover">Z</span>
                  <span className="hero__hover">a</span>
                  <span className="hero__hover">c</span>
                  <span className="hero__hover">k</span>
                </span>
                <span className="hero__title__right">
                  <span className="hero__hover">V</span>
                  <span className="hero__hover">a</span>
                  <span className="hero__hover">l</span>
                  <span className="hero__hover">i</span>
                  <span className="hero__hover">s</span>
                </span>
              </div>
            </h1>
          </div>
        </section>
      <script src="'../services/AnimationService'"></script>
    </main>
  );
};

export default Home;
