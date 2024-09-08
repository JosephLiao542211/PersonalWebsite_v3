import React, { useState, useEffect, useRef } from "react";
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
  const lightboxRef = useRef<HTMLDivElement>(null);

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
  }, [lb]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        lightboxRef.current &&
        !lightboxRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div ref={lightboxRef} className="relative flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-gray-700"
        >
          Close
        </button>
        <EmblaCarousel imageURL={images} slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Lightbox;
