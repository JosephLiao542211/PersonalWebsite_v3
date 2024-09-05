import React from "react";
import Background from "@/components/Landing/Background";
import { ReactElement } from "react";
import NavBar from "@/components/Landing/NavBar";
import Typewriter from "@/components/Typewriter";
import BarNav from "@/components/Landing/BarNav";

interface LayoutWithNavbarsProps {
  NavbarTop: ReactElement;
  NavbarBottom: ReactElement;
  page: string;
}

const Landing: React.FC<LayoutWithNavbarsProps> = ({
  NavbarTop,
  NavbarBottom,
  page,
}) => {
  const getTextColorClass = () => {
    switch (page) {
      case "Resume":
        return "text-red-500";
      case "Project":
        return "text-blue-500";
      case "Gallery":
        return "text-green-500";
      default:
        return "text-red-500"; // Default color in case of an unrecognized page
    }
  };
  return (
    <div className="h-full ">
      <Background></Background>
      {NavbarTop}
      <div className="relative z-10 flex h-screen items-center justify-center text-center">
        <div className="absolute">
          <div className="flex-col justify-center">
            <div className="font-ztbro_i text-[2.5rem] tracking-[0.3em] text-white">
              HELLO I'M
            </div>
            <Typewriter
              words={[
                {
                  text: "JOSEPH LIAO",
                  className: `font-bigger text-[20em] leading-[1.1] transition-all ${getTextColorClass()}`,
                },
              ]}
            ></Typewriter>
            <div>chinese</div>
          </div>
        </div>
        {NavbarBottom}
      </div>
    </div>
  );
};

export default Landing;
