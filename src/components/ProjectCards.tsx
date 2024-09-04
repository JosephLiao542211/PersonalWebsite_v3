import React from "react";

interface CardProps {
  title: string;
  link: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, link, description }) => {
  return (
    <div className="relative z-10 flex h-[48vh] w-[42%] justify-between bg-white/20 p-5 align-middle backdrop-blur-md">
      {title}
    </div>
  );
};

export default Card;
