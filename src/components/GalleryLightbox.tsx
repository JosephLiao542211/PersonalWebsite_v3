import React, { useState, useEffect } from "react";
import EmblaCarousel from "./EmbalaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embala.css";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  lb: string;
}

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, lb }) => {
  const [images, setImages] = useState<string[]>([
    "queensu.png",
    "image 7.jpg",
  ]);

  useEffect(() => {
    switch (lb) {
      case "FINE ARTS":
      case "GRAPHIC DESIGN":
        setImages(["queensu.png", "image 7.jpg"]);
        break;
      case "WEB DESIGN":
        setImages(["image 7.jpg"]);
        break;
      default:
        setImages(["image 7.jpg"]);
        break;
    }
  }, [lb]); // Dependency array to trigger effect when lb changes

  if (!isOpen) return null; // This ensures the lightbox doesn't render when isOpen is false

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <button
        onClick={onClose}
        className="relative text-white hover:text-gray-700"
      >
        Close
      </button>
      <EmblaCarousel imageURL={images} slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Lightbox;
