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

    /* const value = {data, setData, fetchAllProducts} */
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );

  /* return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  ); */
};
