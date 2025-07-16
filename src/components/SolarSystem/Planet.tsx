import { useRef, useState, useCallback, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { PlanetData } from "./constants";
import SaturnRings from "./SaturnRings";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

interface Props {
  data: PlanetData;
  speed: number;
  onClick: () => void;
  onHover: (name: string | null) => void;
}

export default function Planet({ data, speed, onClick, onHover }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [angle, setAngle] = useState(Math.random() * Math.PI * 2);
  const [hovered, setHovered] = useState(false);

  const distance = useMemo(
    () => (isMobile ? data.distance * 0.8 : data.distance),
    [data.distance]
  );
  const size = useMemo(() => (isMobile ? data.size * 0.8 : data.size), [data.size]);

  useFrame((_, delta) => {
    if (groupRef.current && meshRef.current) {
      setAngle((prev) => prev + delta * speed * data.speed);
      groupRef.current.position.x = Math.cos(angle) * distance;
      groupRef.current.position.z = Math.sin(angle) * distance;
      meshRef.current.rotation.y += delta * data.rotationSpeed;
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      if (hovered) meshRef.current.scale.setScalar(1.1);
    }
  });

  const handlePointerEnter = useCallback(() => {
    setHovered(true);
    onHover(data.name);
    document.body.style.cursor = "pointer";
  }, [data.name, onHover]);

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    onHover(null);
    document.body.style.cursor = "default";
  }, [onHover]);

  return (
    <>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[distance - 0.02, distance + 0.02, isMobile ? 64 : 128]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={hovered ? 1 : 0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Planet */}
      <group ref={groupRef}>
        <mesh
          ref={meshRef}
          onClick={onClick}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[size, 64, 64]} />
          <meshStandardMaterial
            color={data.color}
            emissive={data.color}
            emissiveIntensity={0.05}
            roughness={0.7}
            metalness={0.2}
          />
        </mesh>

        {data.hasRings && <SaturnRings />}
        {hovered && (
          <Html distanceFactor={15} position={[0, size + 1, 0]}>
            <div className="bg-card/90 backdrop-blur-sm border border-border rounded px-2 py-1 text-xs text-foreground font-orbitron">
              {data.name}
            </div>
          </Html>
        )}
      </group>
    </>
  );
}
