import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function Overlay() {
  return (
    <div className="intro-container">
      <div className="name-wrapper">
        <p className="title-name fullname">Dilan Ramirez</p>
        <p className="ocupation">Software Engineer</p>
      </div>
    </div>
  );
}

function App() {
  const goDown = (
    <ExpandMoreIcon
      className="chevron-down"
      onClick={() => console.log("clicked")}
    />
  );
  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <section style={{ height: "100vh" }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
        <Overlay />
      </section>

      <section style={{ height: "100vh" }}>
        <h1>timeline</h1>
      </section>
    </div>
  );
}

export default App;
