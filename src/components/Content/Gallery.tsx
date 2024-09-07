import CenterDot from "../CenterDot";
import DynamicBackground from "../DynamicBackground";
import GalleryCard from "../GalleryCard";
import Timeline from "../Timeline";
import { SetStateAction, useState } from "react";

import { EmblaOptionsType } from "embla-carousel";
import Lightbox from "../GalleryLightbox";

function Gallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lbcontent, setlb] = useState("Fine");

  const openLightbox = (lb: SetStateAction<string>) => {
    setIsLightboxOpen(true);
    setlb(lb); // Call setlb with a string parameter
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setlb("Lightbox closed"); // Call setlb with a string parameter
  };

  return (
    <div className="relative bg-black">
      <div className="left-1/2 h-full justify-center space-x-5 overflow-x-hidden p-[5%] md:flex  md:h-screen">
        <GalleryCard
          onclick={openLightbox}
          title={"GRAPHIC DESIGN"}
          imageUrl={"queensu.png"}
          description={"24342"}
        ></GalleryCard>
        <GalleryCard
          onclick={openLightbox}
          title={"FINE ARTS"}
          imageUrl={"queensu.png"}
          description={"Sketches, Paintings, Portraits, Still Lifes ..."}
        ></GalleryCard>
        <GalleryCard
          onclick={openLightbox}
          title={"WEB DESIGN"}
          imageUrl={"queensu.png"}
          description={"24342"}
        ></GalleryCard>
      </div>

      <Lightbox isOpen={isLightboxOpen} onClose={closeLightbox}>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Lightbox Content</h2>
          <p className="mt-2 text-gray-600">{lbcontent}</p>
        </div>
      </Lightbox>
    </div>
  );
}

export default Gallery;
