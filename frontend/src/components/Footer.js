
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
    <footer className='main__footer'>
      <section className='home__footer'>
        <div className='footer__left'>
          <p className='place'>CLT, NC</p>
          <div className='time'>{estTime}</div>
        </div>
        <div className='footer__center'>
          <div className='socials'>
            <span>SPOTIFY</span>
            <span>INSTAGRAM</span>
            <span>GITHUB</span>
            <span>LINKEDIN</span>
          </div>
        </div>
        <div className='footer__right'>
          <div className='credit'>
            <span>ACKNOWLEDGEMENTS</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
