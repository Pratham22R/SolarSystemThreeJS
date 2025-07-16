import * as THREE from 'three';

export default function SaturnRings() {
  return (
    <group rotation={[Math.PI / 2 + 0.2, 0, 0]}  position={[0, 0.1, 0]}>
       <mesh>
    <ringGeometry args={[5, 6.5, 128]} />
    <meshStandardMaterial color="#C2B280" transparent opacity={0.7} side={THREE.DoubleSide} />
  </mesh>
      <mesh>
    <ringGeometry args={[6.6, 7.2, 128]} />
    <meshStandardMaterial color="#D4C5A0" transparent opacity={0.5} side={THREE.DoubleSide} />
  </mesh>

       <mesh>
    <ringGeometry args={[7.3, 8, 128]} />
    <meshStandardMaterial color="#E6D7B8" transparent opacity={0.3} side={THREE.DoubleSide} />
  </mesh>
    </group>
  );
}
