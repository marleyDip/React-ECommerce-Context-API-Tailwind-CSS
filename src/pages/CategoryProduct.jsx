import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loading from "../assets/Loading4.webm";
import { ChevronLeft } from "lucide-react";
import ProductListView from "../components/ProductListView";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);

  const params = useParams();
  const category = params.category;
  //console.log(category);
  const navigate = useNavigate();

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      const data = res.data.products;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button
            onClick={() => navigate("/")}
            className="group bg-gradient-to-t from-blue-500 via-cyan-500 to-emerald-500 hover:bg-gradient-to-r text-black font-semibold mb-5 px-3 py-1.5 gap-1 rounded-md shadow-md hover:rounded-lg hover:shadow-lg hover:translate-x-1 duration-200 ease-out flex items-center cursor-pointer"
          >
            <ChevronLeft className="text-indigo-900 transform group-hover:-translate-x-1 group-hover:rotate-180  transition-transform duration-200 ease-in-out" />
            <span className="transform group-hover:-translate-x-1 transition-transform duration-200 ease-in">
              Back
            </span>
          </button>

          {searchData.map((product, index) => {
            return <ProductListView key={index} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
