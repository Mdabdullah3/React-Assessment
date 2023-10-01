import React from "react";
import { BiMenu } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const CategoriSection = () => {
  return (
    <section>
      <hr />
      <div className="mx-auto w-10/12 flex justify-between">
        <div class="dropdown">
          <div className="flex items-center justify-between w-52 bg-[#F5CCDC] px-2 py-4 text-[#471D6B]">
            <h1 className="flex items-center gap-2 uppercase tracking-wider">
              <span className="text-2xl">
                <BiMenu />
              </span>
              Categories
            </h1>
            <span className="text-xl">
              <FiChevronDown />
            </span>
          </div>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="flex items-center gap-4 text-white">
          <button className="bg-[#471D6B] px-6 py-2 tracking-wider rounded-full">
            Offers
          </button>
          <button className="bg-[#FF87A6] px-6 py-2 tracking-wider rounded-full">
            Sellers Pick
          </button>
          <button className="bg-[#913BDB] px-6 py-2 tracking-wider rounded-full">
            Campaign
          </button>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default CategoriSection;
