import {
  CameraControls,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Tree } from "./Tree";

function App() {
  return (
    <div className="app">
      <Canvas>
        {/* <fog attach="fog" args={["#8fc8e3", 1, 10]} /> */}
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
        <PerspectiveCamera makeDefault position={[0, 3, 5]} fov={60} />
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
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
          <planeGeometry args={[15, 15]} />
          <MeshReflectorMaterial
            envMapIntensity={0}
            // normalMap={normal}
            normalScale={[0.15, 0.15]}
            // roughnessMap={roughness}
            dithering={true}
            color={"#1bc8eb"}
            roughness={0.6}
            blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
            mixBlur={30} // How much blur mixes with surface roughness (default = 1)
            mixStrength={80} // Strength of the reflections
            mixContrast={1} // Contrast of the reflections
            resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
            mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
            depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
            minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
            maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
            depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
            debug={0}
            reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
          />
        </mesh>
        <mesh scale={[1.5, 0.3, 1.4]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={"#523f06"} />
        </mesh>
        <mesh scale={[1.3, 0.2, 1.2]} position={[1, 0, 0.1]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={"#6e5714"} />
        </mesh>
        <mesh scale={[1.3, 0.3, 1.2]} position={[0.1, 0, 1]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={"#8f7426"} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
