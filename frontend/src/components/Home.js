//import * as THREE from "three";
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Center,
  View,
  Preload,
  Stats,
  OrbitControls,
  PresentationControls,
  Environment, } from '@react-three/drei';
import { useControls, Leva } from 'leva';
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

  return (
    <div ref={ref} className='home'>
      <section className='home__header'>
        <div className='home__header__left'>
          <div className='name'>
            <span>ZACHERIAH <br /> VALIS</span>
          </div>
          <div className='folio'>
            <span>SOFTWARE ENGINEER <br /> FOLIO / 2023</span>
          </div>
        </div>

        <div className='home__header__center'ref={nameView}  />

        <div className='home__header__right'>
          <div className='availability'>
            <span>AVAILABLE FOR FREELANCE <br /> WORK FROM JANUARY 2024</span>
          </div>
          <div className='contact'>
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="home__nav">
        <div ref={infoView} className="left">

        </div>
        <div ref={workView} className="right">

        </div>
      </section>

      <section className='home__hero'>
      </section>

      <section className='home__footer'>
      </section>
    <Leva hidden />
    <Canvas
      eventSource={ref}
      className='home__canvas'
      key={concurrent}
      mode={concurrent ? "concurrent" : "blocking"}
      shadows
      camera={{ position: [-3, 0.75, 6], zoom: 1, fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      >
      <Suspense fallback={null}>
        <View index={1} track={nameView}>
          <Center top>
          <Environment files={HDR} background={false}/>
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
              <Text size={10}>Zack Valis</Text>
            </PresentationControls>

          </Center>
        </View>
        <View index={2} track={infoView}>
          <Environment files={HDR} background={false}/>
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
              <Text size={10}>Info</Text>
            </PresentationControls>
        </View>
        <View index={3} track={workView}>
          <Environment files={HDR} background={false}/>
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
              <Text size={10}>Work</Text>
            </PresentationControls>
        </View>
      </Suspense>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
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
      <CameraPositionLogger event='mousedown' />
      <Preload all />
    </Canvas>
  </div>
  );
};

export default Home;
