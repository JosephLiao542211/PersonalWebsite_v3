import React from "react";

interface AcItem {
  title: string;
  date: string;
  description: string;
  image: string;
  inView: boolean;
}

const AccomplishmentSlide: React.FC<AcItem> = ({
  title,
  date,
  description,
}) => {
  return (
    <div className="relative z-10 flex h-full justify-between bg-blue-600 align-middle">
      <div className="flex-col p-[10%] py-[5%]">
        <div className="min-w-[250px]">
          <div className="relative flex items-center"></div>
          <div className="mt-6">
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-sm text-white">{date}</p>
            <p className="mt-2 text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
      <div>
        <img className="h-full object-cover" src="image 7.jpg"></img>
      </div>
    </div>
  );
};

export default AccomplishmentSlide;
