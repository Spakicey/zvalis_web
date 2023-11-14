import * as THREE from "three";
import React, { Suspense, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  Center,
  PresentationControls,
  OrbitControls,
  Environment,
  Lightformer,
  Stats,
  Float } from '@react-three/drei';
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
    text: 'ZACK VALIS      HIRE           DEVELOPER           FOR        SOFTWARE',
    color: '#f60',
    fontSize: { value: 1, min: 0.1, max: 2 },
    fontDepth: { value: 0.25, min: 0.01, max: 3.5 },
    uRadius: { value: 2.25, min: 0.1, max: 3 },
    uTwists: { value: 0, min: 0, max: 3, step: 1 },
    uTwistSpeed: { value: 0, min: 0, max: 100, step: 1 },
    uRotateSpeed: { value: -0.5, min: -3, max: 3, step: 0.01 }
  })

  const config2 = useControls('Circle Text', {
    text: 'lllllllllllllllllllllllllllllllllllll',
    color: 'DBE2E9',
    fontSize: { value: 1, min: 0.1, max: 2 },
    fontDepth: { value: 1, min: 0.01, max: 3.5 },
    uRadius: { value: .75, min: 0.1, max: 3 },
    uTwists: { value: 2, min: 0, max: 3, step: 1 },
    uTwistSpeed: { value: 20, min: 0, max: 100, step: 1 },
    uRotateSpeed: { value: 2, min: -3, max: 3, step: 0.01 }
  })

  const infoConfig = useControls('infoText', {
    text: 'INFO',
    fontSize: { value: 1, min: 0.1, max: 2 },
    fontDepth: { value: 1, min: 0.01, max: 3.5 },
    color: '#DBE2E9'
  })

  const workConfig = useControls('workText', {
    text: 'WORK',
    fontSize: { value: 1, min: 0.1, max: 2 },
    fontDepth: { value: 1, min: 0.01, max: 3.5 },
    color: '#DBE2E9'
  })

  const nameConfig = useControls('nameText', {
    text: 'Zack Valis',
    fontSize: { value: 1, min: 0.1, max: 2 },
    fontDepth: { value: .5, min: 0.01, max: 3.5 },
    color: '#DBE2E9'
  })

  const jobConfig = useControls('jobText', {
    text: 'SOFTWARE DEVELOPER',
    fontSize: { value: .75, min: 0.1, max: 2 },
    fontDepth: { value: .75, min: 0.01, max: 3.5 },
    color: '#FFD700'
  })

  return (
    <div className='home'>
      <section className='home__header'>
        <Leva hidden />
        <Canvas shadows camera={{ position: [0, 0, 5.5], zoom: 1, fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={null}>
            <Center back>
                <Text1 config={nameConfig} />
            </Center>
            <Center top front visible={false}>
              <Float scale={0.75} position={[0, 0.65, 0]} rotation={[0, 0.6, 0]}>
                <Text1 config={jobConfig} />
              </Float>
            </Center>
          </Suspense>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </section>

      <section className="home__nav">
        <div className="left">
        <Canvas shadows camera={{ position: [-1, 0, 5.5], zoom: 1, fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={null}>
            <Text1 config={infoConfig} />
          </Suspense>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
        </div>
        <div className="right">
          <Canvas shadows camera={{ position: [1, 0, 5.5], zoom: 1, fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={null}>
              <Text1 config={workConfig} />
            </Suspense>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
          </Canvas>
        </div>
      </section>

      <section className='home__hero'>

      </section>

      <section className='home__footer'>
      </section>
  </div>
  );
};

export default Home;
