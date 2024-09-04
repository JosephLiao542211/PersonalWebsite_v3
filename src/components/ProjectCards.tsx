import React from "react";

interface CardProps {
  title: string;
  link: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, link, description }) => {
  return (
    <div className="relative z-10 flex h-[48vh] w-1/4 justify-between bg-blue-600 align-middle">
      {title}
    </div>
  );
};

export default Card;
