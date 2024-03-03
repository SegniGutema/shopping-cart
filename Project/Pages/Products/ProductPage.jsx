import Products from "./Products";
import { useState, useMemo } from "react";
import useFetch from "../../Hooks/useFetch";
import Filter from "./Filter";

const ProductPage = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const [filters, setFilters] = useState({
    category: "",
    price: [0, 1000],
    alphabet: "",
    sortDirection: "asc",
  });

  const filteredProducts = useMemo(() => {
    let filteredList = [];
    if (data) {
      filteredList = data.filter((product) => {
        const { category, price, alphabet } = filters;
        return (
          (!category || category === product.category) &&
          price[0] <= product.price &&
          product.price <= price[1] &&
          (!alphabet || product.title.toUpperCase().startsWith(alphabet))
        );
      });
    }

    // Sort the filtered list based on sort direction
    return filters.sortDirection === "asc"
      ? filteredList.sort((a, b) => a.title.localeCompare(b.title))
      : filteredList.sort((a, b) => b.title.localeCompare(a.title));
  }, [filters, data]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="my-20 md:my-24 pt-16">
      <h1 className="mb-12 font-bold text-3xl md:text-4xl text-center">
        Products
      </h1>
      {loading && (
        <div className="mx-auto text-2xl text-center">Loading...</div>
      )}
      {error && <div className="mx-auto text-2xl text-center">{error}</div>}
      {data && (
        <div>
          <Filter onFilterChange={handleFilterChange} />
          <Products products={filteredProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
