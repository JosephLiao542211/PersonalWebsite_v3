import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const hobbies = [
  {
    title: "Visual Art",
    date: "2008 - Present",
    description:
      "Capturing landscapes and candid moments during travels and events. Photography allows me to creatively express and explore diverse perspectives through the lens.",
    extendedDescription:
      "From breathtaking sunsets to urban street photography, it helps me connect with my surroundings and appreciate the little details.",
    image: "../art/fineart/Painting.jpg",
  },
  {
    title: "Wrestling",
    date: "2015 - Present",
    description:
      "Competing at various levels, wrestling teaches discipline and endurance. It has shaped my understanding of strategy and resilience.",
    extendedDescription:
      "Through wrestling, I've learned valuable lessons in teamwork, discipline, and physical fitness.",
    image: "WT.jpg",
  },
  {
    title: "BJJ",
    date: "2022 - Present",
    description:
      "Competing at various levels, wrestling teaches discipline and endurance. It has shaped my understanding of strategy and resilience.",
    extendedDescription:
      "Through wrestling, I've learned valuable lessons in teamwork, discipline, and physical fitness.",
    image: "BJJ.jpg",
  },
  // Add more hobbies here...
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hobbies: React.FC = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={false}
      showDots={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          className="relative z-10 flex h-[80vh] w-full justify-between overflow-hidden rounded-lg"
        >
          {/* Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-full w-2/3"
          >
            <img
              className="h-full w-full rounded-l-lg object-cover"
              src={hobby.image}
              alt={hobby.title}
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mr-[10%] flex w-1/3 flex-col justify-center p-[3%] pr-0 text-white"
          >
            <div>
              <h4 className="mb-2 font-bigger text-[2em]  uppercase leading-tight tracking-[0.05em] text-red-500 md:text-[8em] md:leading-[1em]">
                {hobby.title}
              </h4>
              <p className="text-md mb-4 italic opacity-80">{hobby.date}</p>
              <p className="text-lg leading-relaxed">{hobby.description}</p>
              <p className="mt-4 text-lg leading-relaxed">
                {hobby.extendedDescription}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hobbies;
