import React, { useState, useEffect } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "50%",
        textAlign: "center",
        margin: "100px auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: "#f3f4f6",
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#3692ff",
            transition: "width 0.1s linear",
          }}
        />
      </div>
      <p
        style={{
          color: "#6b7280",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {progress}%
      </p>
    </div>
  );
}

export default ProgressBar;
