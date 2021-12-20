import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/car/scene.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -140.55]} rotation={[-Math.PI, 0, -Math.PI]}>
          <group rotation={[-Math.PI, 0, 0]}>
            <group position={[0, -95.75, 42.16]}>
              <mesh geometry={nodes.BTechFix_Vehicle_0.geometry} material={materials.Vehicle} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/car/scene.gltf')