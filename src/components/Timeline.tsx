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
    <div className="relative z-10 flex h-full justify-between bg-black align-middle">
      <div className="w-1/2 flex-col pr-12">
        <h1 className="pt-[2%] font-bigger text-[7em] leading-[1em] tracking-[0.05em] text-white md:text-[7.8vw]">
          EXPERIENCE
        </h1>
        {items.map((item, index) => (
          <div key={index} className="min-w-[250px]">
            <div className="mt-6">
              <h4 className="font-bigger text-[3em] uppercase leading-[1em] tracking-[0.05em] text-red-500">
                {item.title}
              </h4>
              <p className="pb-3 pt-[2%] font-ztbro_i text-[1.4em] leading-[0.5em] tracking-[0.2em] text-gray-300">
                {item.position}
              </p>
              <p className="pb-[2%] pt-[2%] font-ztbro_i text-[1.2em] leading-[0.5em] tracking-[0.2em] text-gray-300">
                {item.date}
              </p>
              <p className="pb-3 pt-[2%] font-ztbro text-[1.2em] leading-[1.5rem] tracking-[0.2em] text-gray-300">
                <Description description={item.description}></Description>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img
          className="mt-[25%] h-full max-h-screen w-full object-cover "
          src="image 7.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Timeline;
