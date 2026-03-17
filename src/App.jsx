import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function SpinningCube() {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <>
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={1} />
      <SpinningCube />
    </Canvas>
    </>
  );
}