import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";
//import { ColliderBox } from "./ColliderBox";
//import { Ramp } from "./Ramp";

export function Track() {
  const result = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/static/models/track.glb"
  );

  const colorMap = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "/static/textures/track.png"
  );

  useEffect(() => {
    colorMap.anisotropy = 16;
  }, [colorMap]);

  let geometry = result.scene.children[0].geometry;

  return (
    <>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          toneMapped={false}
          map={colorMap}
        />
      </mesh>
    </>
  );
}
