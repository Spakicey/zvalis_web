
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
    <footer className='footer'>
      <div className='container'>
        <p className='clock'>CLT, NC: {estTime}</p>
        <div className='socials'>
          <span>SPOTIFY </span>
          <span>INSTAGRAM </span>
          <span>GITHUB </span>
          <span>LINKEDIN</span>
        </div>
        <span className='credit'>ACKNOWLEDGEMENTS</span>
      </div>
    </footer>
  );
};

export default Footer;
