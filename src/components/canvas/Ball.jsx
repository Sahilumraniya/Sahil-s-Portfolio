/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import "animate.css";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvsLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={0.1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, tooltipContent }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        shadows
        gl={{ preserveDrawingBuffer: true }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Suspense fallback={<CanvsLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
      {showTooltip && <Tooltip tooltipContent={tooltipContent} />}
    </>
  );
};

const Tooltip = ({ tooltipContent }) => {
  return (
    <div className="animate__animated animate__fadeInDown">
      <p className="flex content-center animate-shimmer items-center justify-center rounded-md border border-violet-800 bg-[linear-gradient(110deg,#2d1340,45%,#79467e,55%,#2d1340)] bg-[length:200%_100%] text-center">
        {tooltipContent}
      </p>
    </div>
  );
};

export default BallCanvas;
