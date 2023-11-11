import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';
import { useControls, Leva } from 'leva';
import TextCircle from './three/TextCircle';
import TextSpiral from './three/TextSpiral';
import background from '../static/CIMG0894.JPG'
import CameraPositionLogger from './three/helpers/CameraPositionLogger';
import {
  Instance,
  OrbitControls,
  Instances,
  Stats,
  Environment,
  Lightformer } from '@react-three/drei';

const Home = () => {
  const spiralConfig = useControls('Spiral Text', {
    text: '...dev......?ilAV.......ZACK.......d3w...',
    color: '#f60',
    fontSize: { value: 1, min: 0.1, max: 2 },
    fontDepth: { value: 0.25, min: 0.01, max: 3.5 },
    uRadius: { value: 2, min: 0.1, max: 3 },
    uTwists: { value: 0, min: 0, max: 3, step: 1 },
    uTwistSpeed: { value: 0.5, min: 0, max: 100, step: 1 },
    uRotateSpeed: { value: 1, min: 0, max: 3, step: 0.01 }
  })
  const circleConfig = useControls('Circle Text', {
    text: 'IMPOSSIBLE',
    color: '#f60',
    fontSize: { value: .89, min: 0.1, max: 2 },
    fontDepth: { value: 0.21, min: 0.01, max: 3.5 },
    uRadius: { value: 2.41, min: 0.1, max: 3 },
    uTwists: { value: 0, min: 0, max: 3, step: 1 },
    uTwistSpeed: { value: 0.5, min: 0, max: 100, step: 1 },
    uRotateSpeed: { value: 0.5, min: 0, max: 3, step: 0.01 }
  })

  return (
    <div className='home' style={{ backgroundImage: `url(${background})` }}>
      <section className='home__hero'>
        <div className='hero__spiral'>
          <Leva hidden />
          <Canvas shadows camera={{ position: [7.19, 0.79, -8.19], zoom: 1, fov: 45 }} gl={{ preserveDrawingBuffer: true }}>
            {/*<PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
              <group position-y={-0.75} dispose={null}>
              </group>
            </PresentationControls>*/}
            <Suspense fallback={null}>
              <TextSpiral config={spiralConfig} />
            </Suspense>
            <Environment resolution={32}>
              <group rotation={[-Math.PI / 4, -0.3, 0]}>
                <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[1, 1, 1]} />
              </group>
            </Environment>

            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/*<OrbitControls
              autoRotateSpeed={-0.1}
              zoomSpeed={0.25}
              minZoom={20}
              maxZoom={100}
              enablePan={false}
              dampingFactor={0.05}
              minPolarAngle={-Math.PI / 2}
              maxPolarAngle={(0.99 * Math.PI) / 2}
          />*/}
            <CameraPositionLogger event='mousedown' />
            {/*<Stats />*/}
          </Canvas>
        </div>
      </section>
  </div>
  );
};

export default Home;
