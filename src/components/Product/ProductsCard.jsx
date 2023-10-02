import { AiTwotoneStar } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { HiMinus, HiOutlinePlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeOne } from "../../redux/features/Cart";

const ProductsCard = ({ product }) => {
  const rating = Math.round(parseFloat(product?.rating?.rate));
  const count = Math.round(parseFloat(product?.rating?.count) / 5);
  console.log(count);

  const discountPrice = product?.price * 0.15; // 15 % discount
  const price = product?.price - discountPrice;

  // From Redux
  const { products, total } = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  console.log(products);
  return (
    <div className="border-[1px] border-primary mx-auto w-11/12 px-6 py-4 rounded-lg mb-7">
      <div>
        <img
          className="w-56 h-52 mx-auto rounded-lg"
          src={product?.image}
          alt=""
        />
      </div>
      <div className="h-36">
        <h1 className="text-lg font-semibold mt-5 tracking-widest ">
          {product?.title ? product?.title.slice(0, 30) : "Not Found"}.
        </h1>
        <div className="flex items-center gap-4 py-2">
          <h3 className="flex items-center gap-2">
            {Array.from(Array(rating), (e, i) => (
              <AiTwotoneStar key={i} className="w-5 text-xl text-[#FFAC0A]" />
            ))}
          </h3>
          <h1 className="text-sm mb-1">({count})</h1>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold tracking-wider">
            ${price ? price.toFixed(2) : "Not Found"}
          </h1>
          <h1>
            <s>${product?.price}</s>
          </h1>
          <h1 className="font-semibold text-sm tracking-widest">(-15%)</h1>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-center w-28 py-1 items-center border-[1px] border-primary rounded-md">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="text-primary after:border-[1px] after:border-primary flex after:ml-2 after:h-6 items-center after:opacity-40"
          >
            <HiOutlinePlus size="20" />
          </button>
          <h1 className="text-lg px-3">
            {products.map((item) => (
              <>
                <h1>{product.title === item.title ? item?.quantity : 0}</h1>
              </>
            ))}
          </h1>
          <button
            onClick={() => dispatch(removeOne(product))}
            className="text-primary before:border-[1px] before:border-primary flex before:mr-2 before:h-6 items-center before:opacity-40"
          >
            <HiMinus size="20" />
          </button>
        </div>
        <button className="font-semibold rounded-md flex items-center gap-2 px-6 py-2 bg-[#FFBFCD] text-primary tracking-wider">
          <span className="text-xl">
            <BiShoppingBag />
          </span>
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
