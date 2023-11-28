import { CameraControls, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Tree } from "./Tree";

function App() {
  return (
    <div className="app">
      <Canvas>
        <OrbitControls />
        <CameraControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={1}
          rotateSpeed={0.5}
          minPolarAngle={1.3}
          maxPolarAngle={0}
          minDistance={4}
          maxDistance={6}
          target={[0, 0, 0]}
          // position={[10, 20, 0]}
        />
        <PerspectiveCamera 
        makeDefault position={[0, 3, 5]} 
        fov={60} />
        {/* <ambientLight 
          intensity={10}
        /> */}
        <pointLight position={[5, 5, 5]} intensity={100} />
        <pointLight position={[0, 0, -15]} intensity={100} />
        <pointLight position={[-10, 10, 5]} intensity={1000} />
        {/* <mesh>
          <boxGeometry
          args={[2, 1, 1]}
          position={[0, 0, 0]}
          />
          <meshStandardMaterial color={'#9a3be2'} />
        </mesh> */}
        <Tree />
      </Canvas>
    </div>
  );
}

export default App;
