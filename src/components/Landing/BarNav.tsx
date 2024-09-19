import React from "react";

type BarNavProps = {
  handleClick: (page: string) => void;
  pagestate: string;
};

const BarNav: React.FC<BarNavProps> = ({ handleClick, pagestate }) => {
  return (
    <div className="relative top-48 m-4 justify-center text-center md:top-48 md:m-8">
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-24 md:space-y-0">
        <span
          className={`cursor-pointer transition-all ${
            pagestate === "Project"
              ? "font-ztbro text-4xl tracking-[0.2em] text-blue-500 md:text-6xl"
              : "font-ztbro_i text-2xl tracking-wide text-gray-500 md:text-4xl"
          }`}
          onClick={() => handleClick("Project")}
        >
          PROJECTS
        </span>
        <span
          className={`cursor-pointer transition-all ${
            pagestate === "Resume"
              ? "font-ztbro text-4xl tracking-[0.2em] text-red-500 md:text-6xl"
              : "font-ztbro_i text-2xl tracking-wide text-gray-500 md:text-4xl"
          }`}
          onClick={() => handleClick("Resume")}
        >
          ABOUT ME
        </span>
        <span
          className={`cursor-pointer transition-all ${
            pagestate === "Gallery"
              ? "font-ztbro text-4xl tracking-[0.2em] text-green-700 md:text-6xl"
              : "font-ztbro_i text-2xl tracking-wide text-gray-500 md:text-4xl"
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
