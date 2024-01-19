
const Credit = () => {

  return (
    <div className='hero'>
      <section className='container'>
        <div className='credit__text'>
          <h1>"ACKNOWLEDGEMENTS"</h1>
          <h3>Modern coding requires taking bits of
            code from a miriad of sources, learning from it,<br /> and molding it
            into the program you need in order to achieve your vision.<br />
            This page is dedicated to all the developers from which I got
            inspiration and code from.<br />
            Thank you!
          </h3>
          <a className="link" href="https://www.seyi.dev/">Oluwadare Oluwaseyi [Stylistic Inspiration + SCSS Code]</a>
          <br />
          <a className="link" href="https://www.fayemi.design/">Isaac Fayemi [Stylistic Inspiration]</a>
          <br />
          <a className="link" href="https://www.github.com/akella">Yuri Artiukh AKA "Akella" [THREE.js Text Code]</a>
          <br />
          <a className="link" href="https://youtu.be/1Hg6gQs4RDQ?si=HN8MF0tKU9uMr9jJ">ABSURD 3D YouTube Channel [Camera Position Logger Code]</a>
          <br />
          <a className="link" href="https://library.superhi.com/posts/making-a-clickable-digital-collage-with-javascript">Rik Lomas [Version 1 Image Drawing Code]</a>
          <h2>
              <a
                className="link"
                href='https://github.com/Spakicey/zvalis_web'
                target="_blank"
                rel="noopener noreferrer"
              >Repo To This Website!
              </a>
            </h2>
        </div>
      </section>
    </div>
  );
};

export default Credit;
