import React, { useState, ReactNode } from "react";
import EmblaCarousel from "./EmbalaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embala.css";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  children: string;
}
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const IMAGES = ["queensu.png", "image 7.jpg"];

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, children }) => {
  const [images, setImages] = useState(["queensu.png", "image 7.jpg"]);
  if (!isOpen) return null; // This ensures the lightbox doesn't render when isOpen is false
  switch (children) {
    case "FINE ART": {
      setImages(["queensu.png", "image 7.jpg"]);

      break;
    }
    case "GRAPHIC DESIGN": {
      setImages(["queensu.png", "image 7.jpg"]);
      break;
    }
    case "WEB DESIGN": {
      setImages(["image 7.jpg"]);

      break;
    }
    default: {
      setImages(["image 7.jpg"]);

      break;
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <button
        onClick={onClose}
        className="relative text-white hover:text-gray-700"
      >
        ASDASDASDAD
      </button>

      <EmblaCarousel
        imageURL={images}
        slides={SLIDES}
        options={OPTIONS}
      ></EmblaCarousel>
    </div>
  );
};

export default Lightbox;
