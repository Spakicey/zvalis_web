
const Footer = () => {
  return (
    <footer className="home__footer" id="js_footer">
      <div className="home__footer__left">
        <p className="place">CLT, NC</p>
        <div className="time">
          <span id="ct"></span>
        </div>
      </div>

      <div className="home__footer__center">
        <div className="footer__links">
          <div className="link__flex">
            <div className="link__flex__inner">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="c-button"
              >
                <span className="c-link">
                  <span className="c-link__inner">
                    <span>X</span>
                    <span className="c-link__animated">X</span>
                  </span>
                </span>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="c-button"
              >
                <span className="c-link">
                  <span className="c-link__inner">
                    <span>INSTA</span>
                    <span className="c-link__animated">INSTA</span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="link_flex">
            <div className="link__flex__inner second">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="c-button"
              >
                <span className="c-link">
                  <span className="c-link__inner">
                    <span>GITHUB</span>
                    <span className="c-link__animated">GITHUB</span>
                  </span>
                </span>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="c-button"
              >
                <span className="c-link">
                  <span className="c-link__inner">
                    <span>LINKEDIN</span>
                    <span className="c-link__animated">LINKEDIN</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home__footer__right">
        <p>
          Design inspired by <br />
          <a
            href="https://www.seyi.dev/"
            target="_blank"
            rel="noopener noreferrer"
            >
              Oluwadare Oluwasey
            </a><br />
          <a
            href="https://fayemi.design/"
            target="_blank"
            rel="noopener noreferrer"
            >
              Isaac Fayemi
            </a>
        </p>
      </div>
    </footer>
  );
};


export default Footer;
