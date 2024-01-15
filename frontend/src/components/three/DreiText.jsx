// ORIGINAL AUTHOR: Akella
import * as THREE from "three";
import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { RGBELoader } from 'three-stdlib';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { useFrame, extend, useLoader } from '@react-three/fiber';
import { MeshTransmissionMaterial } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MaterialXLoader } from "three/examples/jsm/loaders/MaterialXLoader.js";


import myFont from '../../static/fonts/font.json';
import myFont2 from '../../static/fonts/Cloister.json';
import myFont3 from '../../static/fonts/Gotisch.json';
import matcap1 from '../../static/textures/chemical_carpaint_blue.png';
import matcap2 from '../../static/textures/envmap.hdr';
import matcap3 from '../../static/textures/metal_plate_rough_4k.jpg';
import matcap4 from '../../static/textures/metal_plate_diff_4k.jpg';
import matcap5 from '../../static/textures/tomato.b5147119.png';
import matcap6 from '../../static/textures/clay_alien.a1b7f7c8.png';
import matcap7 from '../../static/textures/venice_sunset_1k.hdr';
import matcap8 from '../../static/textures/standard_surface_chrome.mtlx'

extend({ TextGeometry });

export default function Text1({ config }) {
  const refMesh = useRef();
  const refMaterial = useRef();
  console.log(config, 'config!!!');
  const font = new FontLoader().parse(myFont3);

  //const texture = new THREE.TextureLoader().load(matcap5);
  //const texture = useLoader(RGBELoader, matcap7);
  const texture = new RGBELoader()
  .setPath( 'textures/equirectangular/' )
  .load( matcap7, function () {
    texture.mapping = THREE.EquirectangularReflectionMapping;
  } );
  //texture.wrapS = THREE.RepeatWrapping;
  //texture.wrapT = THREE.RepeatWrapping;

  // For videos as texture
  //texture = new THREE.VideoTexture(video);
	//texture.colorSpace = THREE.SRGBColorSpace;

  let geo = new TextGeometry(config.text, { font, size: config.fontSize, height: config.fontDepth, curveSegments: 100, bevelEnabled: false });
  geo.center();
  geo.computeBoundingBox();
  let refUniforms = {
    uTime: { value: 0 },
    uMin: { value: { x: -1, y: 0, z: 0 }, },
    uMax: { value: { x: 1, y: 0, z: 0 }, },
  };

  useFrame((state, delta) => {
    if (refMaterial.current.userData.shader) {
      refMaterial.current.userData.shader.uniforms.uTime.value += delta
    }
  });

  useLayoutEffect(() => {
    refMesh.current.geometry = geo
    geo.computeBoundingBox()
    let shader = refMaterial.current.userData.shader
    if (shader) {
      shader.uniforms.uMin.value = geo.boundingBox.min
      shader.uniforms.uMax.value = geo.boundingBox.max
      shader.uniforms.uMax.value.x += config.fontSize / 6
    }
    refUniforms.uMin.value = geo.boundingBox.min
    refUniforms.uMax.value = geo.boundingBox.max
    // space after text
    refUniforms.uMax.value.x += config.fontSize / 6
  });


  const result = (
    <mesh ref={refMesh} castShadow>
      <bufferGeometry attach="geometry" geometry={geo} />
      <MeshTransmissionMaterial
        ref={refMaterial}
        attach="material"
        background={texture}
        //map={texture}
        reflectivity={0.5}
        roughness={0}
        transmission={0.6}
        thickness={0.5}
        color={config.color}
        ior={0.7}
        distortionScale = {1}
          distortion = {1}
          temporalDistortion = {0.4}
      />
      {/*

      <meshNormalMaterial
        //onBeforeCompile={onBeforeCompile}
        ref={refMaterial}
        attach="material"
        //map={texture}
        color={'red'}
      />


      */}
    </mesh>
  );
  return result
}
