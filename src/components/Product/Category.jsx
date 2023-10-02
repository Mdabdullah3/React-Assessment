import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import useProducts from "../../hook/useProducts";

const CategoryList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [products] = useProducts();
  console.log(products);

  const uniqueCategori = new Set();
  const uniqueCategoryArray = products
    .map((book) => book.category)
    .filter((categor) => {
      if (!uniqueCategori.has(categor)) {
        uniqueCategori.add(categor);
        return true;
      }
      return false; // Return false to exclude duplicates
    });

  console.log(uniqueCategoryArray);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-xl tracking-widest flex gap-20 items-center font-semibold"
      >
        Category
        <span>
          <HiPlus />
        </span>
      </button>
      <div>
        <h1 className="border-b-2 mt-3 border-primary"> </h1>
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2">
          <ul className="py-1">
            {uniqueCategoryArray.map((item) => (
              <div className="">
                <label htmlFor={item}>
                  <input
                    type="radio"
                    name="category"
                    className="mt-4"
                    value={item}
                    id={item}
                  />
                  <span className="text-md ml-3 capitalize tracking-wider">
                    {item}
                  </span>
                </label>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
