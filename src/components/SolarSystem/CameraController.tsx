import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
  target: THREE.Vector3 | null;
  enabled: boolean;
}

export default function CameraController({ target, enabled }: Props) {
  const { camera } = useThree();

  useFrame(() => {
    if (target && enabled) {
      const idealPosition = new THREE.Vector3(
        target.x + 8,
        target.y + 8,
        target.z + 8
      );
      camera.position.lerp(idealPosition, 0.03);
      camera.lookAt(target);
    }
  });

  return null;
}
