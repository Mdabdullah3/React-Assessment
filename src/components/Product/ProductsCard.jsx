import React from "react";

const ProductsCard = ({ product }) => {
  return (
    <div className="border-[1px] border-primary mx-auto w-11/12 px-6 py-4 rounded-lg mb-7">
      <div>
        <img
          className="w-56 h-52 mx-auto rounded-lg"
          src={product?.image}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-lg font-semibold mt-3 tracking-widest">
          {product?.title ? product?.title.slice(0, 30) : "Not Found"}.
        </h1>
        <h1>{product?.price ? product?.price : "Not Found"}</h1>
      </div>
    </div>
  );
};

export default ProductsCard;
