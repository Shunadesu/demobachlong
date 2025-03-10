"use client"; // ✅ Ensure this is present

import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
const Iphone16 = () => {
  const gltf = useLoader(GLTFLoader, "/iphone16/scene.gltf"); // Ensure correct path
  return <primitive 
    object={gltf.scene} 
    scale={5.5} 
    position-y={0}
    position-x={0} 
  />;
};

const Iphone16Canvas = () => {
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20,5,10],far: 200, near: 0.1, fov: 25 }} gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableRotate={true} autoRotate />
        <Iphone16 />
      <Preload all />
    </Canvas>
  );
};

export default Iphone16Canvas;
