import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

const PriceRange = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative inline-block text-left mt-48">
      <button
        onClick={toggleDropdown}
        className="text-xl tracking-widest flex gap-32 items-center font-semibold"
      >
        Price
        <span>
          <HiPlus />
        </span>
      </button>
      <div>
        <h1 className="border-b-2 mt-3 border-primary"> </h1>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-4">
          <input
            type="range"
            min={0}
            max={100}
            className="range range-primary"
          />
        </div>
      )}
      <div className="mt-14 ml-1 tracking-wider">
        <span className="font-semibold">Price</span> - $0 To ${100}
      </div>
    </div>
  );
};

export default PriceRange;
