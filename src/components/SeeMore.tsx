import React, { useState } from "react";

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle between showing full or partial text
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Number of characters to display when collapsed
  const visibleTextLength = 100;

  // Conditionally show the full text or a truncated version
  const displayedText = isExpanded
    ? description
    : description.slice(0, visibleTextLength) +
      (description.length > visibleTextLength ? "..." : "");

  return (
    <div>
      {/* Display the text based on expansion state */}
      <p
        className={`pt-[2%] font-ztbro text-[1.3rem] leading-[2rem] tracking-[0em] ${
          isExpanded ? "text-white" : "text-gray-500"
        }`}
      >
        {displayedText}
      </p>

      {/* Button to toggle between "Read More" and "Read Less" */}
      {description.length > visibleTextLength && (
        <button
          className="mt-2 rounded-md border border-red-500 p-3 py-2 text-red-500 transition-all hover:bg-red-500 hover:bg-opacity-100 hover:text-white"
          onClick={toggleExpand}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default Description;
