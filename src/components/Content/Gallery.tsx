import GalleryCard from "../GalleryCard";

import { SetStateAction, useState } from "react";

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
        {lbcontent}
      </Lightbox>
    </div>
  );
}

export default Gallery;
