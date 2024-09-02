import React from "react";

interface TimelineItem {
  title: string;
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative z-10 flex h-full justify-between bg-blue-600 align-middle">
      <div className="flex-col">
        {items.map((item, index) => (
          <div key={index} className="min-w-[250px]">
            <div className="relative flex items-center"></div>
            <div className="mt-6">
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-sm text-white">{item.date}</p>
              <p className="mt-2 text-sm text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img className="h-full object-cover" src="image 7.jpg"></img>
      </div>
    </div>
  );
};

export default Timeline;
