import { useEffect, useState } from "react";
import { GetData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";

import loading from "../assets/Loading4.webm";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { data, fetchAllProducts } = GetData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    //console.log(category);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
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

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
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

            <div className="grid grid-cols-3 gap-7 mt-10">
              {filteredData?.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })}
            </div>
          </div>
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
