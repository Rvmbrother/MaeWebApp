import React from "react";
import "./Architecture.css";
import { Canvas } from "@react-three/fiber";
import { Sphere, Plane, OrbitControls } from "@react-three/drei";

export default function Architecture({ className }) {
  return (
    <section
      className={`archi ${className}`}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <Canvas
        shadows // Enable shadows
        camera={{ position: [0, 5, 5], fov: 50 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#b39f87",
        }}
      >
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow // Enable shadows for the light
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {/* Ground Plane */}
        <Plane
          args={[10, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow // This plane receives shadows
        >
          <meshStandardMaterial color="#777" />
        </Plane>
        {/* Sphere */}
        <Sphere
          args={[1, 32, 32]}
          position={[0, 0, 0]}
          rotation={[0.5, 0.5, 0]}
          castShadow // This object casts shadows
        >
          <meshStandardMaterial color="red" />
        </Sphere>
        <OrbitControls
          enabled={true}
          minDistance={2}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
      <h1 style={{ position: "relative", zIndex: 1 }}>Architecture Section</h1>
    </section>
  );
}
