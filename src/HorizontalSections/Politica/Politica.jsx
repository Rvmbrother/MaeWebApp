import React from "react";
import "./Politica.css";
import { Canvas } from "@react-three/fiber";
import { Box, Plane } from "@react-three/drei";

export default function Politica({ className }) {
  return (
    <section
      className={`poli ${className}`}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <Canvas
        camera={{ position: [0, 5, 5] }} // Set camera position
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
        <Box args={[1, 1, 1]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial color="yellow" />
        </Box>
      </Canvas>
      <h1 style={{ position: "relative", zIndex: 1 }}>Política Section</h1>
    </section>
  );
}
