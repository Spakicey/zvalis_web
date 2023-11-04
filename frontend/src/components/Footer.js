import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const Footer = () => {
  const [estTime, setEstTime] = useState('');

  useEffect(() => {
    // Function to update EST time
    function updateESTTime() {
      // Get current time in Eastern Time Zone (EST)
      const estTime = moment.tz('America/New_York').format('HH:mm:ss');

      // Update state with formatted EST time
      setEstTime(estTime);
    }

    // Call the function to update EST time when the component mounts
    updateESTTime();

    // Update EST time every second (optional)
    const intervalId = setInterval(updateESTTime, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <footer className="home__footer" id="js_footer">
      <div className="home__footer__left">
        <p className="place">CLT, NC</p>
        <div className="time">{estTime}</div>
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
                    <span>Spotify</span>
                    <span className="c-link__animated">Spotify</span>
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
                    <span>Instagram</span>
                    <span className="c-link__animated">Instagram</span>
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
                    <span>GitHub</span>
                    <span className="c-link__animated">GitHub</span>
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
                    <span>LinkedIn</span>
                    <span className="c-link__animated">LinkedIn</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home__footer__right">
        <p>
          <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Acknowledgements
              </a>
        </p>
      </div>
    </footer>
  );
};


export default Footer;
