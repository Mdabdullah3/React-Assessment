import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

const PriceRange = ({ handleSlider, priceRange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block  mt-48">
      <button
        onClick={toggleDropdown}
        className="md:text-xl text-md tracking-widest flex md:gap-32 gap-2 items-center font-semibold"
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
            defaultValue={[priceRange]}
            type="range"
            onChange={(e) => handleSlider([parseInt(e.target.value)])}
            min={0}
            max={1000}
            className="range range-primary"
          />
        </div>
      )}
      <div className="mt-14 ml-1 tracking-wider">
        <span className="font-semibold text-sm">Price</span> - $0 To $
        {priceRange}
      </div>
    </div>
  );
};

export default PriceRange;
