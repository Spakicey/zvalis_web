import * as THREE from "three";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import React, { useRef, useMemo, useLayoutEffect } from "react";
import { RGBELoader } from 'three-stdlib';
import { useLoader, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import myFont from '../../static/fonts/Gotisch.json';
import matcap7 from '../../static/textures/venice_sunset_1k.hdr';

const SEGMENTS = 12;

export default function Text({ children, vAlign = "center", hAlign = "center", size = 1, color = "#000000", ...props }) {
  const font = new FontLoader().parse(myFont);
  //const texture = useLoader(RGBELoader, matcap7);
  //texture.wrapS = THREE.RepeatWrapping;
  //texture.wrapT = THREE.RepeatWrapping;

  const config = useMemo(() => ({ font, size: 1, height: 0.5, curveSegments: SEGMENTS, bevelEnabled: false }), [
    font,
    SEGMENTS,
  ]);

  const refMesh = useRef();
  const refMaterial = useRef();

  useFrame((state, delta) => {
    if (refMaterial.current.userData.shader) {
      refMaterial.current.userData.shader.uniforms.uTime.value += delta
    }
  });

  useLayoutEffect(() => {
    const size = new THREE.Vector3();
    refMesh.current.geometry.computeBoundingBox();
    refMesh.current.geometry.boundingBox.getSize(size);
    refMesh.current.position.x = hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
    refMesh.current.position.y = vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
  }, [children]);

  const geom = useMemo(() => new TextGeometry(children, config), [children, config]);
  return (
    <mesh ref={refMesh} geometry={geom} rotation={[0, -0.5, 0]}>
      <MeshTransmissionMaterial
        ref={refMaterial}
        attach="material"
        metalness={.75}
        //background={texture}
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
}
