import React from "react";
import CenterDot from "./CenterDot"; // Adjust the import path as needed

const DynamicBackground: React.FC = () => {
  // Define the number of rows and columns for the grid
  const rows = 12;
  const cols = 20;

  return (
    <div className="absolute z-0 h-fit bg-black py-24">
      <div
        className=" grid "
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: "5px", // Adjust spacing between dots as needed
          height: "100vh", // Full viewport height
          width: "100vw", // Full viewport width
          maskImage:
            "radial-gradient(circle, white 30%, rgba(255, 255, 255, 0) 90%)", // Stronger edge mask
          WebkitMaskImage:
            "radial-gradient(circle, white 30%, rgba(255, 255, 255, 0) 90%)", // For WebKit browsers
        }}
      >
        {/* Render a grid of CenterDot components */}
        {Array.from({ length: rows * cols }).map((_, index) => (
          <CenterDot key={index} />
        ))}
      </div>
    </div>
  );
};

export default DynamicBackground;
