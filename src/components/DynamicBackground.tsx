import React, { useState, useEffect, useRef } from "react";
import CenterDot from "./CenterDot"; // Adjust the import path as needed

const DynamicBackground: React.FC = () => {
  const [dotCount, setDotCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define the number of columns for the grid
  const cols = 20; // Adjust the number of columns as needed
  const rowHeight = 50; // Height of each row in pixels

  useEffect(() => {
    const updateDotCount = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight; // Get the height of the container
        const rows = Math.ceil(containerHeight / (rowHeight * 1.1)); // Calculate the number of rows
        setDotCount(cols * rows); // Set the total number of dots needed
      }
    };

    // Initial calculation
    updateDotCount();

    // Recalculate on window resize
    window.addEventListener("resize", updateDotCount);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateDotCount);
    };
  }, [cols, rowHeight]);

  return (
    <div
      ref={containerRef}
      className="absolute z-0 h-full w-full overflow-hidden bg-black py-24"
    >
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`, // Fixed number of columns
          gridAutoRows: `${rowHeight}px`, // Set each row height; adjust as needed
          gap: "5px", // Adjust spacing between dots as needed
          width: "100vw", // Full viewport width
          // Full viewport height to fill the screen
          maskImage:
            "linear-gradient(to right, transparent, white 30%, white 70%, transparent)", // Linear gradient from left and right
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 30%, white 70%, transparent)", // For WebKit browsers
        }}
      >
        {/* Render the dynamically calculated number of CenterDot components */}
        {Array.from({ length: dotCount }).map((_, index) => (
          <CenterDot key={index} />
        ))}
      </div>
    </div>
  );
};

export default DynamicBackground;
