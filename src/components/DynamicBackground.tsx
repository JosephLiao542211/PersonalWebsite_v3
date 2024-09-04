import React from "react";
import CenterDot from "./CenterDot"; // Adjust the import path as needed

const DynamicBackground: React.FC = () => {
  // Define the number of columns for the grid
  const cols = 20; // Adjust the number of columns as needed

  // Calculate the total number of items based on a reasonable assumption of rows needed
  const totalItems = cols * Math.ceil(window.innerHeight / 30); // Adjust 50 to your row height

  return (
    <div className="absolute z-0 h-full overflow-y-hidden bg-black py-24">
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`, // Fixed number of columns
          gridAutoRows: "50px", // Set each row height; adjust as needed
          gap: "5px", // Adjust spacing between dots as needed
          // height: "150%", // Full viewport height
          width: "100vw", // Full viewport width
          maskImage:
            "radial-gradient(circle, white 30%, rgba(255, 255, 255, 0) 90%)", // Stronger edge mask
          WebkitMaskImage:
            "radial-gradient(circle, white 30%, rgba(255, 255, 255, 0) 90%)", // For WebKit browsers
        }}
      >
        {/* Render enough CenterDot components to fill the grid */}
        {Array.from({ length: totalItems }).map((_, index) => (
          <CenterDot key={index} />
        ))}
      </div>
    </div>
  );
};

export default DynamicBackground;
