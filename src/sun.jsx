import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sun = () => {
  const sunRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    sunRef.current.position.x = Math.cos(elapsedTime / 4) * 10;
    // sunRef.current.position.y = Math.sin(elapsedTime / 2) * 10;
    sunRef.current.position.z = Math.sin(elapsedTime / 4) * 10;
  });

  return (
    <mesh position={[0, 10, 0]} ref={sunRef}>
      <pointLight position={[0, 0, 0]} intensity={100} />
    </mesh>
  );
};

export default Sun;
