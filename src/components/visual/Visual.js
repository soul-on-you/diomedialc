import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "drei";
import { OrbitControls, Stars } from "@react-three/drei";
// import { Section, Box } from "@quarkly/widgets";
import Model from "../../models/Car";
// import Car from "../../models/Car2"
// import Derbi from "../../models/Derbi"
import { Sugar } from "react-preloaders2";

// function Plane() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[100, 100]} />
//       <meshLambertMaterial attach="material" color="dark" />
//     </mesh>
//   );
// }

export default () => {
  return (
    <Suspense fallback={<Sugar />}>
      <Canvas camera={{ position: [70, 200, 50], zoom: 1 }}>
        <color attach="background" args={["grey"]} />
        <OrbitControls />
        {/* <Stars /> */}
        <ambientLight intensity={0.5} />
        <spotLight
          position={[70, 200, 50]}
          angle={0.3}
          penumbra={1}
          castShadow
        />
        <Model />
        {/* <Plane /> */}
      </Canvas>
    </Suspense>
  );
};
