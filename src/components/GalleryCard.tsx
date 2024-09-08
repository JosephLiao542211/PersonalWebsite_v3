import React from "react";
import { useState } from "react";

interface CardProps {
  title: string;
  imageUrl: string;

  description: string;
  onclick: (arg0: string) => void;
}

const GalleryCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  onclick,
}) => (
  <div className="relative md:w-[45%]" onClick={() => onclick(title)}>
    <div
      className="md:hover:border-green-500-500 group relative z-10 h-full items-center justify-evenly overflow-hidden rounded-xl border-green-500 bg-cover bg-center transition-all md:hover:scale-105 md:hover:border-[7px]"
      style={{ backgroundImage: `url(${imageUrl})` }} // Background image
    >
      {/* Overlay using pseudo-element */}
      <div className="absolute inset-0 z-0 bg-green-900 bg-opacity-50 backdrop-blur-sm transition-opacity group-hover:opacity-60"></div>

      <div className="relative top-1/4 z-10 px-[15%] text-center">
        <div className="text-center font-bigger text-[9em] uppercase leading-[0.9] tracking-wide text-white">
          {title}
        </div>
        <div className=" text-center font-ztbro text-[2em] uppercase leading-[0.9] tracking-wide text-gray-400">
          {description}
        </div>
      </div>
    </div>
  </div>
);

export default GalleryCard;
