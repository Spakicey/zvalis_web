import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Center,
  OrbitControls,
  Environment } from '@react-three/drei';
import { useControls } from 'leva';
import CameraPositionLogger from './helpers/CameraPositionLogger';
import Text from "./DreiText2";
import HDR from '../../static/textures/venice_sunset_1k.hdr'

export function Scene() {
  const { concurrent, distributed } = useControls({
    concurrent: { value: true },
    distributed: { value: true },
  });

  return (
    <Canvas
      key={concurrent}
      mode={concurrent ? "concurrent" : "blocking"}
      shadows
      camera={{ position: [0, 0, 10], zoom: 1, fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      >
      <Suspense fallback={null}>
        <Environment files={HDR}
          background={false}/>
        <Center>
          <Center top>
            <Text size={5.5}>Zack Valis</Text>
          </Center>
          <Center bottom left>
            <Text size={5.5}>Info</Text>
          </Center>
          <Center bottom right>
            <Text size={5.5}>Work</Text>
          </Center>
        </Center>
      </Suspense>
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
      <CameraPositionLogger event='mousedown' />
    </Canvas>
  );
};
