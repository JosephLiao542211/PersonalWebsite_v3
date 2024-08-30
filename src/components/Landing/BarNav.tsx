import React from "react";
import { useState } from "react";

type BarNavProps = {
  handleClick: (page: string) => void;
  pagestate: string;
};

const BarNav: React.FC<BarNavProps> = ({ handleClick, pagestate }) => {
  return (
    <div className="relative top-48 m-8 justify-center text-center ">
      <div className="flex space-x-24">
        {/* {pagestate === "ART" && <div>AHHHHHH</div>} */}
        <span
          className={`cursor-pointer ${
            pagestate === "Resume" ? "font-bold text-blue-500" : "text-gray-500"
          }`}
          onClick={() => handleClick("Project")}
        >
          PROJECTS
        </span>
        <span onClick={() => handleClick("Resume")}>RESUME</span>
        <span onClick={() => handleClick("Gallery")}>GALLERY</span>
      </div>
    </div>
  );
};
export default BarNav;
