import Products from "./Products";
import { useState, useMemo } from "react";
import Filter from "./Filter";
import { useProductContext } from "../../Context/ProductContext";

const initialFilters = {
  category: "",
  price: [0, 1000],
  alphabet: "",
  sortDirection: "asc",
};

const MultipleProductPage = () => {
  const [filters, setFilters] = useState(initialFilters);

  const { products, loading, error } = useProductContext();

  const filteredProducts = useMemo(() => {
    let filteredList = [];
    if (products) {
      filteredList = Array.from(products).filter((product) => {
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
  }, [filters, products]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handleResetFilter = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="my-20 md:my-24 pt-16">
      <h1 className="mb-12 font-bold text-3xl md:text-4xl text-center">
        Products
      </h1>
      {loading && (
        <div className="mx-auto text-2xl text-center my-12">Loading...</div>
      )}
      {error && (
        <div className="mx-auto text-2xl text-center">{error.message}</div>
      )}
      {products && (
        <div>
          <Filter
            onFilterChange={handleFilterChange}
            onResetFilter={handleResetFilter}
          />
          {filteredProducts.length > 0 ? (
            <Products products={filteredProducts} />
          ) : (
            <div className="mx-auto text-lg text-center mt-24">
              Sorry, We do not have products with filters you provided
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultipleProductPage;
