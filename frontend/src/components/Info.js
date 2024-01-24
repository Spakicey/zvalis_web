// Info.js
import { useEffect } from 'react';
import { setHeroSize } from '../services/heroSizeService';
import miata1 from '../static/miata1.jpg';
import scoob1 from '../static/scoob1.jpg';
import scoob2 from '../static/scoob2.jpg';

const Info = () => {

  useEffect(() => {
    setHeroSize();
  }, []);

  return (
    <div className='hero'>
      <section className='container'>
        <div className='info'>
          <h1 className='text'>"ABOUT ZACK VALIS"</h1>
          <p className='text'>Welcome to my personal website!
            My name is Zack and I am a Software
            Developer currently based out of Charlotte,
            North Carolina. I specialize in Data Science and Web
            Development, but I am always willing and eager to learn
            more in order to grow my skills.
            I graduated from USC Upstate in 2020
            with a BS in Computer Science and went back to school
            in 2022 to earn a certificate in Data Analytics from
            UNC Charlotte.
            I'm a well rounded person who loves the
            intersection between form and function.
            When developing this website, I tirelessly blended the
            two and took great inspiration from hip hop
            and streetwear culture, as well as classic '90s website styles such as
            the <a className='link-style'
                    href='https://www.spacejam.com/1996/'
                    target="_blank"
                    rel="noopener noreferrer">Space Jam</a> site in order to make
            the vision I had for my website a reality.
          </p>
          <img className='image' src={scoob1} alt='2012 Subaru With the Motor Out' />
          <img className='image' src={scoob2} alt='EJ25 Motor' />
          <img className='image' src={miata1} alt='1990 Mazda Miata' />
          <p className='text'>Some of my personal interests: I'm a huge car
            guy and have a couple cars that I like to work on, maintain,
            and customize. I am currently rebuilding my 2012 Subaru STi
            hatch to make roughly 400whp and plan to turn my 1990 Miata into
            a fully fledged Time Attack racecar. I also like sports and mostly follow
            Football, Basketball, and Formula 1. I dabble in fashion,
            primarily wearing streewear brands and have a small, but
            growing sneaker collection. Lastly, In 2017/2018 while studying
            abroad in Germany, I started to get into photography and
            continue to play around with different cameras and angles
            only using natural lighting with no
            post-processing. Many of these images can be seen in the drawing
            component on the home page!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Info;
