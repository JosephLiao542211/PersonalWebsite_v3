import React from "react";
import Description from "./SeeMore";

interface TimelineItem {
  title: string;
  position: string;
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between bg-black align-middle md:flex-row">
      {/* Left Section: Experience Text and Timeline */}
      <div className="w-full flex-col px-4 md:w-1/2 md:pr-12">
        <h1 className="pt-4 font-bigger text-[3em] leading-tight tracking-[0.05em] text-white md:pt-[2%] md:text-[7em] md:leading-[1em]">
          EXPERIENCE
        </h1>
        {items.map((item, index) => (
          <div key={index} className="min-w-[250px]">
            <div className="mt-6">
              <h4 className="font-bigger text-[2em] uppercase leading-tight tracking-[0.05em] text-red-500 md:text-[3em] md:leading-[1em]">
                {item.title}
              </h4>
              <p className="pb-3 pt-2 font-ztbro_i text-[1.1em] leading-tight tracking-[0.2em] text-gray-300 md:pt-[2%] md:text-[1.4em]">
                {item.position}
              </p>
              <p className="pb-2 pt-2 font-ztbro_i text-[1em] leading-tight tracking-[0.2em] text-gray-300 md:pb-[2%] md:text-[1.2em]">
                {item.date}
              </p>
              <p className="pb-3 pt-2 font-ztbro text-[1em] leading-[1.5rem] tracking-[0.2em] text-gray-300 md:text-[1.2em]">
                <Description description={item.description} />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Image */}
      <div className="mt-6 w-full md:mt-0 md:w-1/2">
        <img
          className="h-full max-h-[50vh] w-full object-cover md:max-h-screen"
          src="image 7.jpg"
          alt="Timeline Image"
        />
      </div>
    </div>
  );
};

export default Timeline;
