import React, { useEffect, useRef } from "react";

const CenterDot: React.FC = () => {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const oppositeLineRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (lineRef.current && oppositeLineRef.current && dotRef.current) {
        const { clientX: mouseX, clientY: mouseY } = event;

        if (dotRef.current) {
          // Get the dot's position and size
          const dotRect = dotRef.current.getBoundingClientRect();
          const center = {
            x: dotRect.left + dotRect.width / 2,
            y: dotRect.top + dotRect.height / 2,
          };

          // Calculate the difference between the dot's center and the mouse position
          const deltaX = mouseX - center.x;
          const deltaY = mouseY - center.y;

          // Calculate the angle in degrees
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

          // Update the line style to point towards the cursor
          lineRef.current.style.transform = `rotate(${angle}deg)`;
          oppositeLineRef.current.style.transform = `rotate(${angle + 180}deg)`;

          // Set the line width based on distance, extending symmetrically
          const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
          const lineLength = Math.max(2000 / Math.max(distance + 1, 76), 12); // Max width 400px
          if (distance < 800) {
            lineRef.current.style.width = `${lineLength}px`;
            oppositeLineRef.current.style.width = `${lineLength}px`;
          } else {
            lineRef.current.style.width = `${12}px`;
            oppositeLineRef.current.style.width = `${12}px`;
          }
        }
      }
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="relative h-16 w-16" // Adjust size as needed
    >
      <div
        ref={lineRef}
        className="absolute left-1/2 top-1/2 z-10 h-3 w-3 rounded-full bg-blue-500"
        style={{
          transformOrigin: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "12px",
        }}
      />

      <div
        ref={oppositeLineRef}
        className="absolute left-1/2 top-1/2 z-0 h-3 rounded-full bg-blue-500"
        style={{
          transformOrigin: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "12px",
        }}
      />
    </div>
  );
};

export default CenterDot;
