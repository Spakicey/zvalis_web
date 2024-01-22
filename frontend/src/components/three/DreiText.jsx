// ORIGINAL AUTHOR: Akella
//import * as THREE from "three";
import { useRef, useLayoutEffect, useMemo } from 'react';
//import { RGBELoader } from 'three-stdlib';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { useFrame, extend } from '@react-three/fiber';
import { MeshTransmissionMaterial } from "@react-three/drei";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//import { MaterialXLoader } from "three/examples/jsm/loaders/MaterialXLoader.js";

//import myFont from '../../static/fonts/font.json';
//import myFont2 from '../../static/fonts/Cloister.json';
import myFont3 from '../../static/fonts/Gotisch.json';

extend({ TextGeometry });
//const SEGMENTS = 12;

export default function Text3D({ children, ...props }) {
  const SEGMENTS = 12;
  const refMesh = useRef();
  const refMaterial = useRef();
  //console.log(config, 'config!!!');
  const font = new FontLoader().parse(myFont3);

  const config = useMemo(() => ({ font, size: 1, height: 0.5, curveSegments: SEGMENTS, bevelEnabled: false }), [
    font,
    SEGMENTS,
  ]);

  //const texture = new THREE.TextureLoader().load(matcap5);
  //const texture = useLoader(RGBELoader, matcap7);

  //const texture = new RGBELoader()
  //.setPath( 'textures/equirectangular/' )
  //.load( matcap7, function () {
    //texture.mapping = THREE.EquirectangularReflectionMapping;
  //} );
  //texture.wrapS = THREE.RepeatWrapping;
  //texture.wrapT = THREE.RepeatWrapping;

  // For videos as texture
  //texture = new THREE.VideoTexture(video);
	//texture.colorSpace = THREE.SRGBColorSpace;

  const geo = useMemo(() => new TextGeometry(children, config), [children, config]);  geo.center();
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
    <mesh ref={refMesh} geometry={geo} rotation={[0, -0.5, 0]}>
      <MeshTransmissionMaterial
        ref={refMaterial}
        attach="material"
        metalness={.75}
        reflectivity={0.5}
        roughness={0}
        transmission={0.6}
        thickness={0.5}
        color={"#DBE2E9"}
        ior={0.7}
        distortionScale = {1}
          distortion = {1}
          temporalDistortion = {0.4}
      />
    </mesh>
  );
  return result
}
