// Credit.js
import { useEffect } from 'react';
import { setHeroSize } from '../services/heroSizeService';

const Credit = () => {

  useEffect(() => {
    setHeroSize();
  }, []);

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
          <span className="c-button">
            <span className="c-link">
              <span className="c-link__inner">
                <span>
                  <a
                    href="https://www.seyi.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Oluwadare Oluwaseyi [Stylistic Inspiration + SCSS Code]
                  </a>
                </span>
                <span className="c-link__animated">
                  <a
                    href="https://www.seyi.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Oluwadare Oluwaseyi [Stylistic Inspiration + SCSS Code]
                  </a>
                </span>
              </span>
            </span>
          </span>
          <br />
          <span className="c-button">
            <span className="c-link">
              <span className="c-link__inner">
                <span>
                  <a
                    href="https://www.fayemi.design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Isaac Fayemi [Stylistic Inspiration]
                  </a>
                </span>
                <span className="c-link__animated">
                  <a
                    href="https://www.fayemi.design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Isaac Fayemi [Stylistic Inspiration]
                  </a>
                </span>
              </span>
            </span>
          </span>
          <br />
          <span className="c-button">
            <span className="c-link">
              <span className="c-link__inner">
                <span>
                  <a
                    href="https://www.github.com/akella"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Yuri Artiukh AKA "Akella" [THREE.js Text Code]
                  </a>
                </span>
                <span className="c-link__animated">
                  <a
                    href="https://www.github.com/akella"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Yuri Artiukh AKA "Akella" [THREE.js Text Code]
                  </a>
                </span>
              </span>
            </span>
          </span>
          <br />
          <span className="c-button">
            <span className="c-link">
              <span className="c-link__inner">
                <span>
                  <a
                    href="https://youtu.be/1Hg6gQs4RDQ?si=HN8MF0tKU9uMr9jJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >ABSURD 3D YouTube Channel [Camera Position Logger Code]
                  </a>
                </span>
                <span className="c-link__animated">
                  <a
                    href="https://youtu.be/1Hg6gQs4RDQ?si=HN8MF0tKU9uMr9jJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >ABSURD 3D YouTube Channel [Camera Position Logger Code]
                  </a>
                </span>
              </span>
            </span>
          </span>
          <br />
          <span className="c-button">
            <span className="c-link">
              <span className="c-link__inner">
                <span>
                  <a
                    href="https://library.superhi.com/posts/making-a-clickable-digital-collage-with-javascript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Rik Lomas [Version 1 Image Drawing Code]
                  </a>
                </span>
                <span className="c-link__animated">
                  <a
                    href="https://library.superhi.com/posts/making-a-clickable-digital-collage-with-javascript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Rik Lomas [Version 1 Image Drawing Code]
                  </a>
                </span>
              </span>
            </span>
          </span>
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
