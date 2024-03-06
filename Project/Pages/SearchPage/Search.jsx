import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounced function to optimize performance (explained later)
  const debouncedSearch = React.useMemo(() => {
    let timerId;
    return (query) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        onSearch(query);
      }, 500); // Adjust debounce delay as needed
    };
  }, [onSearch]);

  // Update search results when searchTerm changes
  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  // Handle user input
  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    onSearch(searchTerm);
  };

  return (
    <div className="flex flex-col space-y-2">
      <input
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-500"
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
