import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../redux/features/AddCartSlice";
const ShoopingCart = () => {
  const { products, total } = useSelector((state) => state?.addCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-gray-100 w-10/12 mx-auto my-20">
        <div className="container mx-auto mt-10">
          <div className="md:flex shadow-md my-10">
            <div className="md:w-3/4 w-full bg-white md:px-10 px-4 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{products.length}</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                  Quantity
                </h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Total
                </h3>
              </div>
              {products.map((item) => (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img
                        className="md:h-24 h-10"
                        src={item?.image}
                        alt="product"
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="md:font-bold text-sm">
                        {item?.title}
                      </span>
                      <span className="text-red-500 text-xs">
                        Quantity : {item?.quantity}
                      </span>
                      <h1
                        onClick={() => dispatch(removeFromCart(item))}
                        className=" cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs"
                      >
                        Remove
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5 items-center">
                    {item?.quantity}
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item?.price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

              <h1
                onClick={() => navigate(-1)}
                className="flex font-semibold text-primary text-sm mt-10 cursor-pointer"
              >
                <svg
                  className="fill-current mr-2 text-primary w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </h1>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  {products?.length ? products?.length : 0}
                </span>
                <span className="font-semibold text-sm">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{(total ? total : 0).toFixed(2)}</span>
                </div>
                <button className=" font-semibold bg-primary tracking-wider py-3 text-sm text-white uppercase w-40">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoopingCart;
