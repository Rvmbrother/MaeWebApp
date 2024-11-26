import React from "react";
import "./Publicacao.css";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";

export default function Publicacao({ className }) {
  return (
    <section
      className={`publicat ${className}`}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5] }} // Set camera position
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "purple",
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Box args={[1, 1, 1]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial color="orange" />
        </Box>
      </Canvas>
      <h1 style={{ position: "relative", zIndex: 1 }}>Publicação Section</h1>
    </section>
  );
}
