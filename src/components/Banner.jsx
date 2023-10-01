import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import bg1 from "../assets/background/Group(1).svg";
import bg2 from "../assets/background/Group(2).svg";
import bg3 from "../assets/background/Vector(2).svg";
import bg4 from "../assets/background/Vector(1).svg";
import bg5 from "../assets/background/Vector(4).svg";
import bg6 from "../assets/background/Vector(3).svg";
const Banner = () => {
  return (
    <div className="h-60 bg-[#FFFEFE] relative">
      <div className="w-10/12 mx-auto">
        <h1 className="flex items-center pt-16 tracking-wider z-10">
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
      <div className="">
        <img className="top-1/4 absolute left-20 opacity-40" src={bg1} alt="" />
        <img
          className="bottom-10 right-40 absolute w-16 opacity-40"
          src={bg5}
          alt=""
        />
        <img
          className="top-10 right-20 absolute w-20 opacity-40"
          src={bg2}
          alt=""
        />
        <img
          className="top-10 right-1/4 absolute w-20 opacity-40"
          src={bg3}
          alt=""
        />
        <img className="top-40 left-1/2 absolute opacity-40" src={bg1} alt="" />
        <img
          className="top-10 right-2/4 absolute opacity-40"
          src={bg4}
          alt=""
        />
        <img className="top-10 left-1/4 absolute opacity-60" src={bg3} alt="" />
        <img
          className="top-32 right-1/3 absolute opacity-40"
          src={bg6}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
