import { useEffect, useState } from "react";
import { GetData } from "../context/DataContext";

import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

import loading from "../assets/Loading4.webm";
import notfound from "../assets/No-Data.json";
import Lottie from "lottie-react";
import MobileFilter from "../components/MobileFilter";

const Products = () => {
  const { data, fetchAllProducts } = GetData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  /* Why use window.scrollTo(0, 0) here?
  
  => When you navigate to this page (say a product listing), you want the user to start at the top of the page.
  => Without it, if they were scrolled down on a previous page, they might land on this page already scrolled down, which feels wrong. */

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    //console.log(category);
    setPage(1);
    setOpenFilter(false);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin <= priceRange[1]) {
      setPriceRange([newMin, priceRange[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax >= priceRange[0]) {
      setPriceRange([priceRange[0], newMax]);
    }
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filteredData?.length / 6);

  /* 
      => This code is using JavaScript’s Array.prototype.filter() method, and the function you’ve written inside is a predicate (callback) function.
      
      => data?.filter(...) → calls the .filter() method on an array (if data isn’t null/undefined).
      => Inside, (item) => { ... } → this is an arrow function (anonymous function).
      => .filter() expects a predicate function → a function that returns true or false for each element.
      => If it returns true, the element is kept in the new array.
      => If it returns false, the element is filtered out.

      => This is an arrow function used as a predicate function inside Array.filter().
  */

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <MobileFilter
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          handleCategoryChange={handleCategoryChange}
          brand={brand}
          handleBrandChange={handleBrandChange}
          setBrand={setBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          handleMinChange={handleMinChange}
          handleMaxChange={handleMaxChange}
        />

        {data?.length > 0 ? (
          <>
            <div className="flex gap-8">
              <FilterSection
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                handleCategoryChange={handleCategoryChange}
                brand={brand}
                handleBrandChange={handleBrandChange}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                handleMinChange={handleMinChange}
                handleMaxChange={handleMaxChange}
              />

              {filteredData?.length > 0 ? (
                <div className="flex flex-col items-center justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                    {filteredData
                      ?.slice(page * 6 - 6, page * 6)
                      .map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                      })}
                  </div>

                  <Pagination
                    page={page}
                    pageHandler={pageHandler}
                    dynamicPage={dynamicPage}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-full mt-10">
                  <Lottie
                    animationData={notfound}
                    className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]"
                  />

                  {/* 
                  <div className="flex items-center justify-center md:h-[600px] md:w-[900px] mt-10">
                     <Lottie animationData={notfound} classID="w-[500px]" /> 
                  </div> */}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
