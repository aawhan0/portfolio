import React from "react";
import "../sections/PulsingDotsLoader.css";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="dots-container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        {/* <p>{Math.round(progress)}% Loaded</p> */}
      </div>
    </Html>
  );
};

export default Loader;
