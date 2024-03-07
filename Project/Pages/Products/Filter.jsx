import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Filter = ({ onFilterChange, onResetFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortDirection, setSortDirection] = useState("asc"); // Default sort direction

  const handleFilter = () => {
    onFilterChange({
      category: selectedCategory,
      price: [minPrice, maxPrice],
      sortDirection,
    });
  };

  const handleReset = () => {
    onResetFilter();
    setSelectedCategory("");
    setMinPrice(0);
    setMaxPrice(1000);
    setSortDirection("asc");
  };

  return (
    <div className="w-full mx-auto max-w-[1600px] font-bold flex flex-wrap gap-6 px-8 md:px-12 bg-blue-900 text-white py-8 mb-6 shadow-lg">
      <label htmlFor="category">Category :</label>
      <select
        className="flex flex-col gap-6 text-black bg-slate-300 h-6 w-52"
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value={"men's clothing"}>{"Men's Clothing"}</option>
        <option value={"women's clothing"}>{"Women's Clothing"}</option>
        <option value="jewelery">Jewelry</option>
      </select>

      <label htmlFor="min-price">Price Min :</label>
      <input
        className=" text-black bg-slate-300 h-6 w-52"
        type="number"
        id="min-price"
        value={minPrice}
        onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
      />
      <label htmlFor="max-price">Price Max :</label>
      <input
        className=" text-black bg-slate-300 h-6 w-52"
        type="number"
        id="max-price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
      />

      <label>Sort By :</label>
      <select
        className="text-black bg-slate-300  h-6 w-52"
        value={sortDirection}
        onChange={(e) => setSortDirection(e.target.value)}
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <div>
        <button
          className="py-3 px-4 w-fit bg-green-600 text-lg mr-5"
          onClick={handleFilter}
        >
          Apply Filters
        </button>
        <button
          className="py-3 px-4 w-fit bg-red-600 text-lg"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
