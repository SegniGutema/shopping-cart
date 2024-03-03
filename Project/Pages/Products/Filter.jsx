import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Filter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [alphabet, setAlphabet] = useState("");
  const [sortDirection, setSortDirection] = useState("asc"); // Default sort direction

  const handleFilter = () => {
    onFilterChange({
      category: selectedCategory,
      price: [minPrice, maxPrice],
      alphabet,
      sortDirection,
    });
  };

  return (
    <div className="w-full mx-auto max-w-[1600px] font-bold flex flex-wrap gap-6 px-8 md:px-12 bg-blue-900 text-white py-8 mb-6 shadow-lg">
      <label htmlFor="category">Category:</label>
      <select
        className="flex flex-col gap-6 text-black bg-slate-300 h-6 w-24"
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value={"men's clothing" || "women's clothing"}>Clothing</option>
        <option value="jewelery">Jewelry</option>
      </select>
      <div className="flex gap-4">
        <label htmlFor="min-price">Price Min:</label>
        <input
          className=" text-black bg-slate-300 h-6 w-24"
          type="number"
          id="min-price"
          value={minPrice}
          onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
        />
        <label htmlFor="max-price">Price Max:</label>
        <input
          className=" text-black bg-slate-300 h-6 w-24"
          type="number"
          id="max-price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="flex gap-3">
        <label htmlFor="alphabet">Alphabet:</label>
        <input
          className=" text-black bg-slate-300 h-6 w-24"
          type="text"
          id="alphabet"
          maxLength="1"
          value={alphabet}
          onChange={(e) => setAlphabet(e.target.value.toUpperCase())}
        />
      </div>
      <label>Sort By:</label>
      <select
        className="text-black bg-slate-300  h-6 w-24"
        value={sortDirection}
        onChange={(e) => setSortDirection(e.target.value)}
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <button
        className="py-3 px-4 w-fit bg-green-600 text-lg"
        onClick={handleFilter}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
