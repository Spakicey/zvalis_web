import * as THREE from "three";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Center,
  Stats } from '@react-three/drei';
import { useControls, Leva } from 'leva';
import CameraPositionLogger from './three/helpers/CameraPositionLogger';
import { Scene } from "./three/Scene";

const Home = () => {

  return (
    <div className='home'>
      <section className='home__header'>
      </section>

      <section className='home__hero'>
        <Leva hidden />
        <Scene />
        <Stats />
      </section>

      <section className='home__footer'>
      </section>
  </div>
  );
};

export default Home;
