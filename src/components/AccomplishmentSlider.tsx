import React from "react";
import AccomplishmentSlide from "./AccomplishmentSlide";

function AccomplishmentSlider() {
  return (
    <div className="relative z-10 flex h-full flex-col justify-center  bg-blue-600 align-middle">
      <AccomplishmentSlide
        title={"A"}
        date={"a"}
        description={"aaaaa"}
        image={"image 7.jpg"}
        inView={false}
      ></AccomplishmentSlide>
    </div>
  );
}

export default AccomplishmentSlider;
