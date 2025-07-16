import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export default function Sun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coronaRef = useRef<THREE.Mesh>(null);

  // Responsive scale factor
  const scaleFactor = useMemo(() => (isMobile ? 0.65 : 1), []);

  // Sizes based on screen
  const radius = 8 * scaleFactor;
  const coronaRadius = 8.6 * scaleFactor;
  const glowRadius = 10 * scaleFactor;
  const lightDistance = isMobile ? 70 : 100;

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
    if (coronaRef.current) {
      coronaRef.current.rotation.y += delta * 0.02;
      coronaRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group>
      {/* Main Sun */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      {/* Corona */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[coronaRadius, 32, 32]} />
        <meshBasicMaterial color="#FFD700" transparent opacity={0.15} />
      </mesh>

      {/* Glow */}
      <mesh>
        <sphereGeometry args={[glowRadius, 32, 32]} />
        <meshBasicMaterial color="#FFA500" transparent opacity={0.08} />
      </mesh>

      {/* Stronger light from sun */}
      <pointLight
        position={[0, 0, 0]}
        intensity={4.5}
        color="#FDB813"
        distance={lightDistance}
        decay={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
}
