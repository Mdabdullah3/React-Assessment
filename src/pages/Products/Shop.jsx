import React, { useState } from "react";
import CategoryList from "../../components/Product/Category";
import useProducts from "../../hook/useProducts";
import ProductsCard from "../../components/Product/ProductsCard.jsx";
import Pagination from "../../components/Paigination";
import PriceRange from "../../components/Product/PriceRange";

const Shop = () => {
  const [products] = useProducts([]);

  // Add Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentData = products.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className="w-10/12 mx-auto flex justify-center mt-20">
        <div className="flex flex-col">
          <div>
            <CategoryList />
          </div>
          <div>
            <PriceRange />
          </div>
          <div>
            <button className="w-full py-2 bg-primary text-white tracking-wider rounded-lg mt-10">
              All Reset
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10">
          {currentData.map((product) => (
            <ProductsCard product={product} />
          ))}
        </div>
      </div>
      <div>
        <Pagination
          totalItem={products?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Shop;
