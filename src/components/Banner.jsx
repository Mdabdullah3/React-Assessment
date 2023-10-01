import React from "react";
import { AiOutlineRight } from "react-icons/ai";
const Banner = () => {
  return (
    <div className="h-40 bg-[#FFFEFE]">
      <div className="w-10/12 mx-auto">
        <h1 className="flex items-center mt-16 tracking-wider">
          <span className="text-md">Healthcare & Beauty</span>
          <span className="mx-4">
            <AiOutlineRight />
          </span>
          <span className="text-sm text-gray-400">Skin Care</span>
        </h1>
        <h1 className="text-4xl font-bold tracking-widest mt-3">
          Skin Care Products
        </h1>
      </div>
    </div>
  );
};

export default Banner;
