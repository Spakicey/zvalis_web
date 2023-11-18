
import React, { Suspense, useRef } from 'react';
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
import CameraPositionLogger from './three/helpers/CameraPositionLogger';
import Text from './three/DreiText2';
import HDR from '../static/textures/venice_sunset_1k.hdr';

const Header = () => {
  const ref = useRef();
  const nameView = useRef();
  const infoView = useRef();
  const workView = useRef();

  const { concurrent, distributed } = useControls({
    concurrent: { value: true },
    distributed: { value: true },
  });

  return (
    <header ref={ref} className='header'>
      <div className='container'>
        <div className='name'>
          <span>ZACHERIAH <br /> VALIS</span>
        </div>
        <div className='folio'>
          <span>SOFTWARE ENGINEER <br /> PORTFOLIO / 2023</span>
        </div>
        <div className="info3" ref={infoView} />
        <div className='name3' ref={nameView} />
        <div className="work3" ref={workView} />
        <div className='avail'>
          <span>AVAILABLE FOR FREELANCE WORK <br /> FROM JANUARY 2024</span>
        </div>
        <div className='contact'>
          <span><br />CONTACT</span>
        </div>
      </div>

      <Leva hidden />
      <Canvas
        className='canvas'
        eventSource={ref}
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
    </header>
  );
};

export default Header;
