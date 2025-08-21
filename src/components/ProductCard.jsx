import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  //console.log(product);

  const navigate = useNavigate();

  return (
    <div className="group h-max bg-gray-100 rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out">
      {/* image & category */}
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 aspect-square group-hover:scale-105 group-hover:active:scale-95 transition-all duration-500 ease-in-out"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="absolute top-0 left-2 backdrop-blur-sm bg-gray-50/80 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium capitalize">
            {product.brand}
          </span>

          <span className="absolute top-0 right-2 backdrop-blur-sm bg-gray-50/80 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium capitalize">
            {product.model}
          </span>

          <span className="absolute bottom-0 left-2 backdrop-blur-sm bg-gray-50/80 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium uppercase">
            {product.category}
          </span>

          <span className="absolute bottom-0 right-2 backdrop-blur-sm bg-gray-50/80 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium capitalize">
            {product.color}
          </span>
        </div>
      </div>
      {/* image & category */}

      {/* info */}
      <div className="p-6">
        <h1 className="line-clamp-2 text-gray-900 font-bold text-lg mb-2">
          {product.title}
        </h1>

        <p className="mb-4 text-sm line-clamp-2 text-gray-700">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          {/* <div className="flex-nowrap  space-x-1.5"> */}
          <div className="flex items-center space-x-1.5">
            <h3 className="text-sm font-semibold text-green-700">
              BDT {product.price - product.discount}
            </h3>

            <h3 className="text-sm font-medium text-gray-500 line-through">
              BDT {product.price}
            </h3>
          </div>

          <div>
            <p className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 font-medium rounded-full shadow-md">
              Save{" "}
              {Math.round(
                ((product.price - (product.price - product.discount)) /
                  product.price) *
                  100
              )}
              %
            </p>
          </div>
        </div>

        <button className="bg-gradient-to-tr from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 px-4 py-2 text-lg text-white w-full font-semibold flex items-center justify-center space-x-2 rounded-md shadow-md hover:rounded-lg hover:shadow-lg transform hover:scale-105 hover:active:scale-95 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ease-in-out">
          <IoCartOutline className="w-6 h-6" />
          <span className="font-medium">Add to Cart</span>
        </button>
      </div>
      {/* info */}
    </div>
  );
};

export default ProductCard;
