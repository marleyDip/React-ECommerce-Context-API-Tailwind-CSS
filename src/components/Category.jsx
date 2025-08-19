import { useEffect } from "react";
import { GetData } from "../context/DataContext";

const Category = () => {
  const { data, fetchAllProducts, categoryOnlyData } = GetData();

  /* 
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((element) => {
      return element[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category"); */

  //console.log(categoryOnlyData);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto px-4 py-7 gap-4 flex items-center justify-around">
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button className="uppercase bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-3 py-1 rounded-md shadow-md hover:rounded-lg hover:shadow-lg transform hover:translate-x-1 hover:-translate-y-0.5 hover:scale-102 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer">
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
