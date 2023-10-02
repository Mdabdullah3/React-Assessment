import React from "react";
import CategoryList from "../../components/Product/Category";
import useProducts from "../../hook/useProducts";
import ProductsCard from "../../components/Product/ProductsCard.jsx";

const Shop = () => {
  const [products] = useProducts([]);
  return (
    <div className="w-10/12 mx-auto flex justify-center mt-20">
      <div>
        <CategoryList />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10">
        {products.map((product) => (
          <ProductsCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
