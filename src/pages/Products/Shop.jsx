import React, { useState } from "react";
import CategoryList from "../../components/Product/Category";
import useProducts from "../../hook/useProducts";
import ProductsCard from "../../components/Product/ProductsCard.jsx";
import Pagination from "../../components/Paigination";
import PriceRange from "../../components/Product/PriceRange";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../shared/Loading";
import { setPriceRange } from "../../redux/features/ProductSlice";

const Shop = () => {
  // Prdocuts Data by hooks
  const [products, loading] = useProducts([]);

  // Data Show By Searhing
  const searchFilter = useSelector((state) => state.search); // From Redux

  const [categoryFilter, setCategoryFilter] = useState(null);

  const filteredBooks = products.filter((item) => {
    const searchData = Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchFilter.toLowerCase())
    );

    const categoryData =
      categoryFilter === null || item.category.includes(categoryFilter);
    return searchData && categoryData;
  });

  // Add Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentData = filteredBooks.slice(firstPostIndex, lastPostIndex);

  // Price Range
  const { priceRange } = useSelector((state) => state.priceRange);
  const dispatch = useDispatch();
  const handleSlider = (value) => {
    dispatch(setPriceRange(value[0]));
  };

  // Price Range Data
  let productsData;
  if (priceRange > 0) {
    productsData = currentData?.filter((item) => item.price <= priceRange);
  } else {
    productsData = currentData;
  }
  console.log("products ", currentData);
  return (
    <>
      <div className="md:w-10/12 w-11/12 mx-auto flex justify-center mt-20">
        <div className="flex flex-col">
          <div>
            <CategoryList setCategoryFilter={setCategoryFilter} />
          </div>
          <div>
            <PriceRange handleSlider={handleSlider} priceRange={priceRange} />
          </div>
          <div>
            <button className="w-full py-2 bg-primary text-white tracking-wider rounded-lg mt-10">
              All Reset
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10">
          {loading ? (
            <h1 className="text-2xl">
              <Loading />
            </h1>
          ) : productsData?.length > 0 ? (
            productsData?.map((product) => (
              <ProductsCard product={product}></ProductsCard>
            ))
          ) : (
            <div>
              <img
                className="mx-auto"
                src="https://www.bagbazaars.com/assets/img/no-product-found.png"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div>
        {productsData?.length > 0 ? (
          <Pagination
            totalItem={filteredBooks?.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Shop;
