import { AiTwotoneStar } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { HiMinus, HiOutlinePlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/CartSlice";
import { AddToCart } from "../../redux/features/AddCartSlice";

const ProductsCard = ({ product }) => {
  const rating = Math.round(parseFloat(product?.rating?.rate));
  const count = Math.round(parseFloat(product?.rating?.count) / 5);
  console.log(count);

  const discountPrice = product?.price * 0.15; // 15 % discount
  const price = product?.price - discountPrice;

  // From Redux
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // Find the item in the cart that matches the current product
  const cartItem = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch addToCart action

    // Update the product object with the quantity in your local state
    product.quantity = (product.quantity || 0) + 1;
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product)); // Dispatch removeFromCart action

    // Update the product object with the quantity in your local state
    if (cartItem) {
      product.quantity = (product.quantity || 0) - 1;
    }
  };
  console.log(product);
  const { products } = useSelector((state) => state.addCart);
  console.log("this is cart", products);

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
            onClick={handleAddToCart}
            className="text-primary after:border-[1px] after:border-primary flex after:ml-2 after:h-6 items-center after:opacity-40"
          >
            <HiOutlinePlus size="20" />
          </button>
          <h1 className="text-lg px-3">{product.quantity || 0}</h1>
          <button
            onClick={handleRemoveFromCart}
            className="text-primary before:border-[1px] before:border-primary flex before:mr-2 before:h-6 items-center before:opacity-40"
          >
            <HiMinus size="20" />
          </button>
        </div>
        <button
          onClick={() => dispatch(AddToCart(product))}
          className="font-semibold rounded-md flex items-center gap-2 px-6 py-2 bg-[#FFBFCD] text-primary tracking-wider"
        >
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
