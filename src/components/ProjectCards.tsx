import React from "react";

interface CardProps {
  title: string;
  link: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, link, description }) => {
  return (
    <div className="relative md:w-[45%]">
      <div className="relative z-10 flex h-full justify-evenly overflow-hidden rounded-xl border-blue-500 bg-white bg-opacity-20 align-middle backdrop-blur-sm transition-all  md:hover:scale-105 md:hover:border-[7px] md:hover:border-blue-500">
        <div className="md:flex">
          <div className="md:w-2/5  ">
            <img
              src="image 7.jpg"
              className=" object-cover sm:h-full md:rounded-s-xl"
            >
              <a href={link}></a>
            </img>
          </div>
          <div className="p-[5%] md:w-3/5">
            <div className="  font-bigger text-6xl uppercase tracking-wide text-white">
              {title}
            </div>

            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
