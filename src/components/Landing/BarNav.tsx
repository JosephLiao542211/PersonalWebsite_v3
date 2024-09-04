import React from "react";
import { useState } from "react";

type BarNavProps = {
  handleClick: (page: string) => void;
  pagestate: string;
};

const BarNav: React.FC<BarNavProps> = ({ handleClick, pagestate }) => {
  return (
    <div className="relative top-48 m-8 justify-center text-center  ">
      <div className="flex items-center  space-x-24">
        {/* {pagestate === "ART" && <div>AHHHHHH</div>} */}
        <span
          className={`cursor-pointer  transition-all  ${
            pagestate === "Project"
              ? "font-ztbro text-6xl tracking-[0.2em] text-blue-500"
              : "font-ztbro_i text-4xl  tracking-wide text-gray-500"
          }`}
          onClick={() => handleClick("Project")}
        >
          PROJECTS
        </span>
        <span
          className={`cursor-pointer transition-all   ${
            pagestate === "Resume"
              ? "font-ztbro text-6xl  tracking-[0.2em] text-red-500"
              : "font-ztbro_i text-4xl tracking-wide text-gray-500"
          }`}
          onClick={() => handleClick("Resume")}
        >
          ABOUT ME
        </span>
        <span
          className={`cursor-pointer transition-all ${
            pagestate === "Gallery"
              ? " font-ztbro text-6xl tracking-[0.2em] text-green-700"
              : "font-ztbro_i text-4xl tracking-wide text-gray-500"
          }`}
          onClick={() => handleClick("Gallery")}
        >
          GALLERY
        </span>
      </div>
    </div>
  );
};
export default BarNav;
