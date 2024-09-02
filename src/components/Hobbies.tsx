import React from "react";

const Hobbies: React.FC = ({}) => {
  return (
    <div className="relative z-10 my-[5%] flex h-full justify-start bg-blue-600 align-middle">
      <div>
        <img className="h-full object-cover" src="image 7.jpg"></img>
      </div>
      <div className="flex-col p-[10%] py-[5%]">
        <div className="min-w-[250px]">
          <div className="relative flex items-center"></div>
          <div className="mt-6">
            <h4 className="text-lg font-bold">title</h4>
            <p className="text-sm text-white">date</p>
            <p className="mt-2 text-sm text-white">description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
