import React from "react";
import Background from "@/components/Landing/Background";
import { ReactElement } from "react";
import NavBar from "@/components/Landing/NavBar";
import Typewriter from "@/components/Typewriter";
import BarNav from "@/components/Landing/BarNav";

interface LayoutWithNavbarsProps {
  NavbarTop: ReactElement;
  NavbarBottom: ReactElement;
}

const Landing: React.FC<LayoutWithNavbarsProps> = ({
  NavbarTop,
  NavbarBottom,
}) => {
  return (
    <div className="h-full ">
      <Background></Background>
      {NavbarTop}
      <div className="relative z-10 flex h-screen items-center justify-center text-center">
        <div className="absolute">
          <div className="flex-col">
            <div>Hello Im</div>
            <Typewriter
              words={[{ text: "JOSEPH LIAO", className: "text-red-500" }]}
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
