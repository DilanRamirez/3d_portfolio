import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import InfoOverlay from "./components/InfoOverlay";
import Stars from "./components/Stars";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <section className="section-container">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>

        <InfoOverlay />
      </section>

      <section style={{ height: "100vh" }}>
        <Timeline />
      </section>
    </div>
  );
}

export default App;
