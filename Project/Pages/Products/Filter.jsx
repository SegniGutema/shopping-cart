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
    <div className="w-full mx-auto max-w-[1600px] font-bold flex flex-wrap gap-6 px-8 md:px-12 bg-gray-50 text-black py-8 mb-6 shadow-lg">
      <label htmlFor="category">
        Category :
        <select
          className="ml-3 h-6 w-52"
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
      </label>

      <label htmlFor="min-price">
        Price Min :
        <input
          className="ml-3  h-6 w-52"
          type="number"
          id="min-price"
          value={minPrice}
          onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
        />
      </label>

      <label htmlFor="max-price">
        Price Max :
        <input
          className="ml-3  h-6 w-52"
          type="number"
          id="max-price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
        />
      </label>

      <label>
        Sort By
        <select
          className="ml-3 h-6 w-52"
          value={sortDirection}
          onChange={(e) => setSortDirection(e.target.value)}
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </label>

      <div>
        <button
          className="py-3 px-4 w-fit hover:border-2 hover:border-green rounded-md text-green-500 text-lg mr-5"
          onClick={handleFilter}
        >
          Apply Filters
        </button>
        <button
          className="mt-3 py-3 px-4 w-fit text-lg  hover:border-2 hover:border-green rounded-md text-red-500"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
