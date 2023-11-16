//import * as THREE from "three";
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Center,
  View,
  Preload,
  Stats,
  Resize,
  OrbitControls,
  PresentationControls,
  Environment, } from '@react-three/drei';
import { useControls, Leva } from 'leva';
import moment from 'moment-timezone';
import CameraPositionLogger from './three/helpers/CameraPositionLogger';
import Text from './three/DreiText2';
import HDR from '../static/textures/venice_sunset_1k.hdr';

const Home = () => {
  const ref = useRef();
  const nameView = useRef();
  const infoView = useRef();
  const workView = useRef();

  const { concurrent, distributed } = useControls({
    concurrent: { value: true },
    distributed: { value: true },
  });

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
    <div ref={ref} className='home'>
      <section className='home__header'>
        <div className='home__header__left'>
          <div className='name'>
            <span>ZACHERIAH <br /> VALIS</span>
          </div>
          <div className='folio'>
            <span>SOFTWARE ENGINEER <br /> PORTFOLIO / 2023</span>
          </div>
        </div>

        <div className='home__header__right'>
          <div className='availability'>
            <span>AVAILABLE FOR FREELANCE <br /> WORK FROM JANUARY 2024</span>
          </div>
          <div className='contact'>
            <span>CONTACT</span>
          </div>
        </div>
      </section>

      <section className="home__nav">
        <div className="left" ref={infoView} />
        <div className='center' ref={nameView} />
        <div className="right" ref={workView} />

      </section>

      <section className='home__hero'>
        <div className='text'>
          <h1>"PLACEHOLDER"</h1>
        </div>
      </section>

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

    <Leva hidden />
    <Canvas
      eventSource={ref}
      className='home__canvas'
      key={concurrent}
      mode={concurrent ? "concurrent" : "blocking"}
      shadows
      camera={{ position: [-3, 0.75, 5], zoom: 1, fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      >
      <Suspense fallback={null}>
        <View index={1} track={nameView}>
          <Center>
          <Environment files={HDR} background={false}/>
          <PresentationControls
            enabled={true}
            rotation={[0,0,0]}
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
              <Resize scale={8}>
                <Text>Zack Valis</Text>
              </Resize>
          </PresentationControls>
          </Center>
        </View>
        <View index={2} track={infoView}>
          <Environment files={HDR} background={false}/>
          <PresentationControls
            enabled={true}
            rotation={[0,0,0]}
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
              <Text>Info</Text>
          </PresentationControls>
        </View>
        <View index={3} track={workView}>
          <Environment files={HDR} background={false}/>
          <PresentationControls
            enabled={true}
            rotation={[0,0,0]}
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
              <Text>Work</Text>
          </PresentationControls>
        </View>
      </Suspense>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CameraPositionLogger event='mousedown' />
      <Preload all />
      <OrbitControls
            enabled={false}
            autoRotateSpeed={-0.1}
            zoomSpeed={0.25}
            minZoom={20}
            maxZoom={100}
            enablePan={false}
            dampingFactor={0.05}
            minPolarAngle={-Math.PI / 2}
            maxPolarAngle={(0.99 * Math.PI) / 2}
          />
    </Canvas>
  </div>
  );
};

export default Home;
