import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

//export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  // fetching all products from API
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.in/api/products?limit=150"
      );
      console.log(res);

      const productsData = res.data.products;
      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  // fetching all category from API
  const getUniqueCategory = (data, property) => {
    let category = data?.map((element) => {
      return element[property];
    });
    category = [...new Set(category)];
    return category;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  /* const value = {data, setData, fetchAllProducts, categoryOnlyData} */

  return (
    <DataContext.Provider
      value={{ data, setData, fetchAllProducts, categoryOnlyData }}
    >
      {children}
    </DataContext.Provider>
  );

  /* return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  ); */
};

export const GetData = () => useContext(DataContext);
