import * as THREE from "three";
import React, { Suspense, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  Center,
  PresentationControls,
  OrbitControls,
  Environment,
  Lightformer } from '@react-three/drei';
import { useControls, Leva } from 'leva';
import CameraPositionLogger from './three/helpers/CameraPositionLogger';
import TextCircle from './three/TextCircle';
import TextSpiral from './three/TextSpiral';
import Text1 from './three/DreiText';

const Home = () => {
  function oscillate(input, min, max) {
    var range = max - min;
    return min + Math.abs(((input + range) % (range * 2)) - range);
  };
  const config = useControls('Spiral Text', {
    text: '...DEV......?ilAV......ZACK......d3W...',
    color: '#f60',
    fontSize: { value: 1, min: 0.1, max: 2 },
    fontDepth: { value: 0.25, min: 0.01, max: 3.5 },
    uRadius: { value: 2.25, min: 0.1, max: 3 },
    uTwists: { value: 0, min: 0, max: 3, step: 1 },
    uTwistSpeed: { value: 0, min: 0, max: 100, step: 1 },
    uRotateSpeed: { value: -0.5, min: -3, max: 3, step: 0.01 }
  })

  const infoConfig = useControls('infoText', {
    text: 'INFO',
    fontSize: { value: 1, min: 0.1, max: 2 },
    fontDepth: { value: 0.25, min: 0.01, max: 3.5 },
    color: '#FFD700'
  })

  const workConfig = useControls('workText', {
    text: 'WORK',
    fontSize: { value: 1, min: 0.1, max: 2 },
    fontDepth: { value: 0.25, min: 0.01, max: 3.5 },
    color: '#FFD700'
  })

  return (
    <div className='home'>
      <section className='home__header'>
      </section>

      <section className="home__nav">
        <div className='left'>
        <Canvas shadows camera={{ position: [0.1, 0.15, 3.21], zoom: 1, fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={null}>
            <Text1 config={infoConfig} />
            </Suspense>
          </Canvas>
        </div>
        <div className='right'>
        <Canvas shadows camera={{ position: [0.13, 0.2, 4.26], zoom: 1, fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={null}>
          <Text1 config={workConfig} />
          </Suspense>
        </Canvas>
        </div>
      </section>

      <section className='home__hero'>
        <div className='hero__spiral'>
          <Leva hidden />
          <Canvas shadows camera={{ position: [15.55, 0.71, 2.46], zoom: 1, fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
            {/*<PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
              <group position-y={-0.75} dispose={null}>
              </group>
            </PresentationControls>*/}
            <Suspense fallback={null}>
              {/*<TextCircle config={config2} />

              */}
              <TextSpiral config={config} />
            </Suspense>
            <Environment resolution={32}>
              <group rotation={[-Math.PI / 4, -0.3, 0]}>
                <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[1, 1, 1]} />
              </group>
            </Environment>

            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls
              autoRotateSpeed={-0.1}
              zoomSpeed={0.25}
              minZoom={20}
              maxZoom={100}
              enablePan={false}
              dampingFactor={0.05}
              minPolarAngle={-Math.PI / 2}
              maxPolarAngle={(0.99 * Math.PI) / 2}
            />
            {/*
              <CameraPositionLogger event='mousedown' />
            */}
            {/*<Stats />*/}
          </Canvas>
        </div>
      </section>

      <section className='home__footer'>
      </section>
  </div>
  );
};

export default Home;
