import loading from "../assets/Loading4.webm";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState("");

  const params = useParams();
  console.log(params);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${params.id}`
      );
      //console.log(res);

      const product = res.data.product;
      setSingleProduct(product);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const originalPrice = Math.round(
    singleProduct.price + (singleProduct.price * singleProduct.discount) / 100
  );

  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <BreadCrums title={singleProduct.title} />

          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
            {/* image */}
            <div className="w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            {/* image */}

            {/* details */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl  font-bold text-gray-800">
                {singleProduct.title}
              </h1>

              <div className="text-gray-700">
                {singleProduct.brand?.toUpperCase()} /{" "}
                {singleProduct.category?.toUpperCase()} / {singleProduct.model}
              </div>

              <p className="text-xl text-red-500 font-bold flex items-center space-x-2">
                BDT {singleProduct.price}
                <span className="pl-2 line-through text-gray-700">
                  BDT {originalPrice}
                </span>
                <span className="bg-red-500 text-base font-medium text-white px-2 py-1 rounded-lg shadow-lg">
                  {singleProduct.discount}% discount
                </span>
              </p>

              <p className="text-gray-600 text-justify text-sm font-medium">
                {singleProduct.description}
              </p>

              {/* quantity */}
              <div className="flex  items-center gap-4">
                <label htmlFor="" className="text-lg font-medium text-gray-700">
                  Quantity:
                </label>

                <input
                  type="number"
                  min={1}
                  value={1}
                  className="w-20 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* quantity */}

              {/* btn */}
              <div className="group flex gap-4 mt-4">
                <button className="px-6 py-2 flex gap-2 text-lg text-white bg-gradient-to-t from-lime-600 via-cyan-600 to-indigo-600 hover:bg-gradient-to-r hover:from-lime-700 hover:via-cyan-700 hover:to-indigo-700 rounded-md shadow-md hover:shadow-lg">
                  <IoCartOutline className="w-6 h-6 transform group-hover:rotate-[360deg] transition-transform duration-200 ease-in-out" />

                  <span className="group-hover:translate-x-0.5">
                    Add to Cart
                  </span>
                </button>
              </div>
              {/* btn */}
            </div>
            {/* details */}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
