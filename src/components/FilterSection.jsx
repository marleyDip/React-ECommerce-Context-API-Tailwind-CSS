import { GetData } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  category,
  setCategory,
  handleCategoryChange,
  brand,
  setBrand,
  handleBrandChange,
  priceRange,
  setPriceRange,
  handleMaxChange,
  handleMinChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = GetData();

  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="bg-white p-2 rounded-md shadow-md border-2 border-gray-400"
      />

      {/* category only data */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categoryOnlyData?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
              />

              <button className="cursor-pointer uppercase">{item}</button>
            </div>
          );
        })}
      </div>
      {/* category only data */}

      {/* brand only data */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Brand</h1>

      <select
        name=""
        id=""
        value={brand}
        onChange={handleBrandChange}
        className="bg-white w-full p-2 border-2 border-gray-200 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:outline-none focus:border-transparent"
      >
        {brandOnlyData?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>
      {/* brand only data */}

      {/* price range */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="">
          Price Range: BDT {priceRange[0]} - BDT {priceRange[1]}
        </label>

        {/* max slide */}
        <input
          type="range"
          name=""
          id=""
          min="0"
          max="5000"
          value={priceRange[1]}
          onChange={handleMaxChange}
        />

        {/* min slider */}
        <input
          type="range"
          name=""
          id=""
          min="0"
          max="5000"
          value={priceRange[0]}
          onChange={handleMinChange}
        />

        {/* <input
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
        /> */}
      </div>

      <button
        className="bg-gradient-to-t from-indigo-500 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-indigo-500 bg-gra text-white rounded-md shadow-md hover:shadow-lg hover:rounded-lg transform hover:translate-x-1 hover:-translate-y-0.5 px-3 py-1.5 mt-5 cursor-pointer transition-all duration-200 ease-in-out"
        onClick={() => {
          setSearch("");
          setCategory("All");
          setBrand("All");
          setPriceRange([0, 5000]);
        }}
      >
        Reset Filters
      </button>
      {/* price range */}
    </div>
  );
};

export default FilterSection;
