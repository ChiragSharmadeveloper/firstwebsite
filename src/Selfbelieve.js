import React, { useEffect, useState } from "react";

const MovingText = () => {
  const [position, setPosition] = useState(0);
  const speed = 2;

  useEffect(() => {
    const moveText = () => {
      setPosition((prev) => (prev > window.innerWidth ? -200 : prev + speed));
    };
    const interval = setInterval(moveText, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200PX",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          fontSize: "34px",
          fontWeight: "bold",
          color: "black",
          position: "absolute",
          whiteSpace: "nowrap",
          transform: `translateX(${position}px)`,
        }}
      >
        BELIEVE <span style={{ color: "red" }}>🔴</span> SELF BELIEVE <span style={{ color: "red" }}>🔴</span> SELF BELIEVE <span style={{ color: "red" }}>🔴</span>SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF  BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF  BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF  BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE  <span style={{ color: "red" }}>🔴</span> SELF BELIEVE 
      </div>
    </div>
  );
};

export default MovingText;