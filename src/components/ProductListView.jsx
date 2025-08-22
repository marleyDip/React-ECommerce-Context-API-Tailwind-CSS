import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="space-y-4 mt-2.5 rounded-2xl shadow-md">
      <div className="bg-gray-100 p-2.5 gap-3.5 sm:gap-7 flex items-center rounded-md shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="h-36 w-24 sm:h-52 sm:w-52 md:w-60 md:h-60 rounded-md shadow-md hover:rounded-lg hover:shadow-lg hover:scale-102 cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        />

        <div className="group space-y-1 sm:space-y-2 md:space-y-4">
          <h1 className="text-base sm:text-lg md:text-xl font-medium sm:font-bold line-clamp-1 sm:line-clamp-2 group-hover:text-red-400 w-[220px] md:w-full">
            {product.title}
          </h1>

          <p className="font-medium  sm:font-semibold flex items-center text-sm sm:text-lg">
            <span className="text-base sm:text-xl md:text-2xl group-hover:text-emerald-700">
              BDT {product.price}
            </span>

            <span className="ml-4 bg-red-100 text-gray-500 text-sm font-medium px-2 py-1 rounded-full shadow-md group-hover:shadow-lg">
              {product.discount}% off
            </span>
          </p>

          <p className="font-medium text-sm sm:text-lg">
            Free Delivery -{" "}
            <span className="font-semibold group-hover:text-red-700">
              {new Date(Date.now() + 86400000).toLocaleDateString("en-US", {
                weekday: "short",
                day: "2-digit",
                month: "short",
              })}
            </span>
            <br />
            Or fastest delivery -{" "}
            <span className="font-semibold group-hover:text-purple-700">
              {new Date(
                Date.now() + 3 * 24 * 60 * 60 * 1000
              ).toLocaleDateString("en-US", {
                weekday: "short",
                day: "2-digit",
                month: "short",
              })}
            </span>
          </p>

          <button
            className="px-3 py-2 mt-1 font-bold text-black bg-gradient-to-tr from-lime-500 via-teal-500 to-violet-500 hover:bg-gradient-to-tl rounded-lg shadow-lg hover:shadow-xl hover:rounded-xl cursor-pointer"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
